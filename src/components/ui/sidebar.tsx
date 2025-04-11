import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight, MoreVertical, X } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Button } from "@/components/ui/button"
import { Slot } from "@radix-ui/react-slot"

const SidebarContext = React.createContext<{
  state: "collapsed" | "expanded" | "auto"
  setState: React.Dispatch<React.SetStateAction<"collapsed" | "expanded" | "auto">>
  isMobile: boolean
}>({
  state: "expanded",
  setState: () => {},
  isMobile: false,
})

function useSidebar() {
  const context = React.useContext(SidebarContext)

  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultState?: "collapsed" | "expanded" | "auto"
}

const widthsCollapsed = {
  mini: "w-14",
  standard: "w-14",
  wide: "w-14",
}

const widthsExpanded = {
  mini: "w-60",
  standard: "w-72",
  wide: "w-80",
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    { open, onOpenChange, defaultState = "expanded", children, className, ...props },
    ref
  ) => {
    const [state, setState] = React.useState<"collapsed" | "expanded" | "auto">(
      () => {
        const cookieValue = document.cookie
          .split("; ")
          .find((row) => row.startsWith("sidebar-state="))
          ?.split("=")[1]

        if (cookieValue === "collapsed" || cookieValue === "expanded") {
          return cookieValue
        }

        return defaultState
      }
    )

    const [openProp, setOpenProp] = React.useState<boolean>(false)

    React.useEffect(() => {
      if (open !== undefined) {
        setOpenProp(open)
      }
    }, [open])

    const onToggle = (value = !openProp) => {
      setOpenProp(value)
      onOpenChange?.(value)
    }

    React.useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        if (e.code === "KeyZ" && (e.ctrlKey || e.metaKey)) {
          if (state === "collapsed") {
            setState("expanded")
          } else {
            setState("collapsed")
          }
        }
      }

      document.addEventListener("keydown", handleKeyDown)
      return () => document.removeEventListener("keydown", handleKeyDown)
    }, [state])

    React.useEffect(() => {
      document.cookie = `sidebar-state=${state};path=/;max-age=31536000`
    }, [state])

    const effectiveState =
      state === "auto"
        ? openProp
          ? "expanded"
          : "collapsed"
        : state

    const isMobile = React.useMemo(() => {
      if (typeof window === "undefined") {
        return false
      }

      return window.innerWidth < 768
    }, [])

    return (
      <SidebarContext.Provider
        value={{
          state: effectiveState,
          setState,
          isMobile,
        }}
      >
        <div
          data-sidebar-state={effectiveState}
          ref={ref}
          className={cn(
            "sidebar group/sidebar flex h-full flex-col overflow-hidden border-r border-border bg-sidebar py-2 text-sidebar-foreground transition-all duration-300",
            effectiveState === "collapsed" ? "w-[--sidebar-width-collapsed]" : null,
            effectiveState === "expanded" ? "w-[--sidebar-width-expanded]" : null,
            className
          )}
          style={{
            ["--sidebar-width-collapsed" as any]: `${isMobile ? "0px" : "var(--collapsed-width, 4rem)"}`,
            ["--sidebar-width-expanded" as any]: `${isMobile ? "100%" : "var(--expanded-width, 16rem)"}`,
          }}
          {...props}
        >
          {children}
        </div>
      </SidebarContext.Provider>
    )
  }
)
Sidebar.displayName = "Sidebar"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="content"
    className={cn("flex flex-1 flex-col overflow-hidden", className)}
    {...props}
  />
))
SidebarContent.displayName = "SidebarContent"

interface SidebarHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  icon?: React.ReactNode
  collapsible?: boolean
}

const SidebarHeader = React.forwardRef<HTMLDivElement, SidebarHeaderProps>(
  ({ className, title, description, icon, collapsible = true, ...props }, ref) => {
    const { setState } = useSidebar()

    function handleToggle() {
      setState((state) => (state === "collapsed" ? "expanded" : "collapsed"))
    }

    const { state, isMobile } = useSidebar()

    return (
      <div
        ref={ref}
        data-sidebar="header"
        className={cn(
          "group flex h-[60px] items-center gap-2.5 border-b border-border px-3.5 text-sidebar-foreground",
          className
        )}
        {...props}
      >
        {icon && (
          <div
            data-sidebar="header-icon"
            data-collapsible={collapsible === false && "icon"}
            className="flex size-9 items-center justify-center rounded-md"
          >
            {icon}
          </div>
        )}
        <div
          data-sidebar="header-content"
          data-collapsible={collapsible === false && "icon"}
          className="flex flex-1 flex-col overflow-hidden group-[[data-sidebar-state=collapsed]]:opacity-0"
        >
          <div className="truncate text-sm font-semibold">{title}</div>
          {description && (
            <div className="truncate text-xs text-sidebar-foreground/70">
              {description}
            </div>
          )}
        </div>
        <div className="flex items-center">
          {collapsible && (
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "size-9 rounded-md border border-transparent text-sidebar-foreground [box-shadow:_0_0_0_1px_transparent] hover:bg-sidebar-accent [&_svg]:size-4",
                "hidden focus-visible:ring-1 focus-visible:ring-offset-0 group-hover/sidebar:block"
              )}
              onClick={handleToggle}
            >
              {isMobile ? (
                <X />
              ) : state === "collapsed" ? (
                <ChevronRight />
              ) : (
                <ChevronLeft />
              )}
            </Button>
          )}
        </div>
      </div>
    )
  }
)
SidebarHeader.displayName = "SidebarHeader"

interface SidebarFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "inset"
}

const SidebarFooter = React.forwardRef<HTMLDivElement, SidebarFooterProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      data-sidebar="footer"
      data-variant={variant}
      className={cn(
        "border-t border-border px-3.5 py-3.5 text-sidebar-foreground",
        variant === "inset" && "mx-3.5 px-0",
        className
      )}
      {...props}
    />
  )
)
SidebarFooter.displayName = "SidebarFooter"

interface SidebarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  collapsible?: boolean | "icon"
  collapsibleIcon?: React.ReactNode
  defaultOpen?: boolean
  headerProps?: React.HTMLAttributes<HTMLButtonElement>
}

const SidebarGroup = React.forwardRef<HTMLDivElement, SidebarGroupProps>(
  (
    {
      className,
      children,
      collapsible,
      collapsibleIcon,
      defaultOpen = true,
      headerProps,
      ...props
    },
    ref
  ) => {
    const isCollapsible = collapsible === true || collapsible === "icon"

    const [isOpen, setIsOpen] = React.useState(defaultOpen)

    return (
      <div
        ref={ref}
        data-sidebar="group"
        data-collapsible={collapsible}
        data-open={isCollapsible ? isOpen : undefined}
        className={cn("space-y-1", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (
            React.isValidElement(child) &&
            child.type === SidebarGroupHeader &&
            isCollapsible
          ) {
            return React.cloneElement(
              child,
              {
                ...headerProps,
                onClick: () => setIsOpen(!isOpen),
              } as React.HTMLAttributes<HTMLElement>,
              <>
                {child.props.children}
                {collapsibleIcon || (
                  <ChevronRight
                    className="size-3.5 transition-transform duration-200 data-[open=true]:rotate-90"
                    data-open={isOpen}
                  />
                )}
              </>
            )
          }

          return child
        })}
      </div>
    )
  }
)
SidebarGroup.displayName = "SidebarGroup"

const SidebarGroupHeader = React.forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    data-sidebar="group-header"
    className={cn(
      "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-medium text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none focus-visible:ring-1",
      className
    )}
    {...props}
  />
))
SidebarGroupHeader.displayName = "SidebarGroupHeader"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-sidebar="group-content"
    className={cn(
      "duration-200 transition-all overflow-hidden group-[[data-open=true]]:animate-in group-[[data-open=false]]:animate-out group-[[data-open=false]]:fade-out-0 group-[[data-open=false]]:slide-out-to-bottom-5 group-[[data-open=true]]:fade-in-0 group-[[data-open=true]]:slide-in-from-bottom-10",
      className
    )}
    {...props}
  />
))
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarGroupLabel = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-sidebar="group-label"
    className={cn(
      "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
      "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
      className
    )}
    {...props}
  />
))
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & { asChild?: boolean }
>(({ className, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="group-action"
      className={cn(
        "absolute top-1.5 right-2 flex aspect-square h-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 focus-visible:ring-sidebar-ring [&_svg]:size-4 [&_svg]:shrink-0",
        className
      )}
      {...props}
    />
  )
})
SidebarGroupAction.displayName = "SidebarGroupAction"

const SidebarMenu = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    label?: React.ReactNode
    labelProps?: React.HTMLAttributes<HTMLParagraphElement>
    actions?: React.ReactNode
  }
>(({ className, label, labelProps, actions, children, ...props }, ref) => {
  const id = React.useId()
  const [isHovered, setIsHovered] = React.useState(false)

  return (
    <div
      ref={ref}
      data-sidebar="menu"
      className={cn("relative space-y-0.5", className)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-labelledby={label && id}
      {...props}
    >
      {label && (
        <SidebarGroupLabel
          id={id}
          className={cn("[&+div]:mt-0", labelProps?.className)}
          {...labelProps}
        >
          {label}
          {actions && (
            <span
              className={cn(
                "hidden absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-200",
                isHovered ? "opacity-100" : "opacity-0",
                "group-[[data-sidebar-state=collapsed]]:hidden"
              )}
            >
              {actions}
            </span>
          )}
        </SidebarGroupLabel>
      )}
      <div className="block pb-1 group-[[data-collapsible=icon]]:hidden">
        {children}
      </div>
    </div>
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuList = React.forwardRef<
  HTMLUListElement,
  React.ComponentProps<"ul">
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    data-sidebar="menu-list"
    className={cn("flex flex-col gap-0.5", className)}
    {...props}
  />
))
SidebarMenuList.displayName = "SidebarMenuList"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.ComponentProps<"li">
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva(
  "group/menu-button peer relative flex h-9 w-full cursor-pointer items-center justify-center gap-2 rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-1",
  {
    variants: {
      variant: {
        default: "",
        outline:
          "border border-border bg-transparent hover:bg-sidebar-accent focus-visible:ring-1 focus-visible:ring-sidebar-ring",
      },
      size: {
        sm: "h-8 text-xs",
        md: "h-9 text-sm",
        lg: "h-10 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

interface SidebarMenuButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
  isActive?: boolean
  tooltip?: React.ReactNode | Record<string, unknown>
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(
  (
    {
      className,
      variant,
      size = "md",
      asChild = false,
      isActive,
      tooltip,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button"
    const { isMobile, state } = useSidebar()

    const button = (
      <Comp
        ref={ref}
        data-sidebar="menu-button"
        data-size={size}
        data-active={isActive}
        className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
        {...props}
      />
    )

    if (!tooltip) {
      return button
    }

    if (typeof tooltip === "string") {
      tooltip = {
        children: tooltip,
      }
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>{button}</TooltipTrigger>
        <TooltipContent
          side="right"
          align="center"
          hidden={state !== "collapsed" || isMobile}
          {...tooltip}
        />
      </Tooltip>
    )
  }
)
SidebarMenuButton.displayName = "SidebarMenuButton"

const SidebarMenuAction = React.forwardRef<
  HTMLButtonElement,
  React.ComponentProps<"button"> & {
    asChild?: boolean
    showOnHover?: boolean
  }
>(({ className, asChild = false, showOnHover = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-action"
      className={cn(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&_svg]:size-4 [&_svg]:shrink-0",
        "after-absolute after-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "opacity-0 hover:opacity-100 peer-hover/menu-button:opacity-100",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuAction.displayName = "SidebarMenuAction"

interface SidebarMenuItemSkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: number
}

const SidebarMenuItemSkeleton = React.forwardRef<
  HTMLDivElement,
  SidebarMenuItemSkeletonProps
>(({ className, items = 10, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-sidebar="menu-item-skeleton"
      className={cn("", className)}
      {...props}
    >
      {Array.from({ length: items }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "h-9 w-full animate-pulse rounded-lg bg-sidebar-accent/30",
            "my-1",
            Math.random() > 0.5 ? "w-full" : `w-[${50 + Math.random() * 40}%]`
          )}
        />
      ))}
    </div>
  )
})
SidebarMenuItemSkeleton.displayName = "SidebarMenuItemSkeleton"

const SidebarMenuSub = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      data-sidebar="menu-sub"
      className={cn("flex flex-col gap-1", className)}
      {...props}
    />
  )
})
SidebarMenuSub.displayName = "SidebarMenuSub"

const SidebarMenuSubItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ ...props }, ref) => <li ref={ref} {...props} />)
SidebarMenuSubItem.displayName = "SidebarMenuSubItem"

const SidebarMenuSubButton = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<"a"> & {
    asChild?: boolean
    size?: "sm" | "md"
    isActive?: boolean
  }
>(({ asChild = false, size = "md", isActive, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a"

  return (
    <Comp
      ref={ref}
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        "flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 text-sidebar-foreground outline-none ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:text-sidebar-accent-foreground",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-xs",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      )}
      {...props}
    />
  )
})
SidebarMenuSubButton.displayName = "SidebarMenuSubButton"

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupHeader,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  sidebarMenuButtonVariants,
  SidebarMenuItem,
  SidebarMenuItemSkeleton,
  SidebarMenuList,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
}
