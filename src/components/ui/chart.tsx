import * as React from "react"
import { useCurrentTheme } from "next-themes"
import { CartesianGrid, Label, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis, } from "recharts"

import { cn } from "@/lib/utils"

const rootThemes = {
  light: ".light-theme",
  dark: ".dark-theme",
  system: ":root",
}

const resolveColor = (color: string): string => {
  if (color.startsWith("#") || color.startsWith("rgb")) {
    return color
  }

  const el = document.createElement("div")
  el.className = color
  document.body.appendChild(el)
  const resolvedColor = window.getComputedStyle(el).color
  document.body.removeChild(el)
  return resolvedColor || color
}

interface ChartConfig {
  theme?: "light" | "dark" | "system"
  grid?: {
    show?: boolean
    strokeWidth?: number
    color?: string
  }
  tooltip?: {
    show?: boolean
  }
  legend?: {
    show?: boolean
    position?: "top" | "bottom" | "left" | "right"
    align?: "left" | "right" | "center"
    margin?: number
    fontSize?: number
    fontFamily?: string
    iconSize?: number
    iconType?: "line" | "plainline" | "square" | "rect" | "circle" | "cross" | "diamond" | "star" | "triangle" | "wye"
    width?: number
    height?: number
    layout?: "horizontal" | "vertical"
    verticalAlign?: "top" | "middle" | "bottom"
  }
  ticks?: {
    show?: boolean
    fontSize?: number
    fontFamily?: string
    color?: string
  }
  axis?: {
    x?: {
      show?: boolean
      color?: string
      fontSize?: number
      fontFamily?: string
      tickLine?: boolean
      axisLine?: boolean
      tickFormatter?: (value: any) => string
      minTickGap?: number
      tickCount?: number
      angle?: number
      textAnchor?: "start" | "middle" | "end"
      verticalAnchor?: "start" | "middle" | "end"
    }
    y?: {
      show?: boolean
      color?: string
      fontSize?: number
      fontFamily?: string
      tickLine?: boolean
      axisLine?: boolean
      tickFormatter?: (value: any) => string
      width?: number
      domain?: [number | string | ((dataMin: number) => number), number | string | ((dataMax: number) => number)]
    }
  }
  types?: {
    line?: {
      strokeWidth?: number
      activeDot?: {
        r?: number
      }
    }
  }
  colors?: Record<string, string>
}

const defaultConfig: ChartConfig = {
  grid: {
    show: true,
    strokeWidth: 1,
    color: "border",
  },
  tooltip: {
    show: true,
  },
  legend: {
    show: true,
    position: "top",
    align: "center",
    iconSize: 14,
    fontSize: 14,
    iconType: "circle",
    margin: 16,
  },
  ticks: {
    show: true,
    fontSize: 12,
    color: "muted-foreground",
  },
  axis: {
    x: {
      show: true,
      color: "muted-foreground",
      fontSize: 12,
      tickLine: true,
      axisLine: true,
      textAnchor: "middle",
      angle: 0,
    },
    y: {
      show: true,
      color: "muted-foreground",
      fontSize: 12,
      tickLine: true,
      axisLine: true,
    },
  },
  types: {
    line: {
      strokeWidth: 2,
      activeDot: {
        r: 4,
      },
    },
  },
}

interface ChartProps<T extends Record<string, any>>
  extends React.HTMLAttributes<HTMLDivElement> {
  config?: ChartConfig
  data: T[]
  variant?: "line" | "pie"
  x: keyof T
  y: Array<keyof T>
}

export function Chart<T extends Record<string, any>>({
  className,
  data = [],
  variant = "line",
  config,
  x,
  y,
  ...props
}: ChartProps<T>) {
  const { resolvedTheme: currentTheme } = useCurrentTheme()

  const theme = config?.theme ?? currentTheme ?? "system"
  const rootTheme = rootThemes[theme]

  function getColor(color: string) {
    if (color.startsWith("var(") || color.startsWith("#")) {
      return color
    }

    const cssVar = `var(--${color})`
    const resolvedColor = resolveColor(cssVar)
    return resolvedColor
  }

  const chartConfig = React.useMemo(() => {
    return {
      ...defaultConfig,
      ...config,
    }
  }, [config])

  const colorMap = {}
  
  React.useEffect(() => {
    const yKeys = y
    
    yKeys.forEach((key: keyof T) => {
      colorMap[key] = `hsl(var(--chart-${String(key)}))`
    })
  }, [y])

  if (variant === "line") {
    return (
      <div className={cn("chart w-full", className)} {...props}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ right: 16 }}>
            {chartConfig?.grid?.show !== false && (
              <CartesianGrid
                strokeDasharray="2 6"
                strokeWidth={chartConfig.grid?.strokeWidth}
                stroke={getColor(
                  chartConfig.grid?.color ?? defaultConfig.grid.color
                )}
                vertical={false}
              />
            )}

            {chartConfig?.tooltip?.show !== false && (
              <Tooltip
                cursor={false}
                contentStyle={{
                  backgroundColor: getColor("background"),
                  border: `1px solid ${getColor("border")}`,
                  borderRadius: "8px",
                  boxShadow:
                    "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 16px rgba(0, 0, 0, 0.05)",
                  fontSize: "14px",
                  padding: "12px",
                }}
                wrapperStyle={{
                  outline: "none",
                }}
                itemStyle={{
                  color: getColor("foreground"),
                }}
                labelStyle={{
                  color: getColor("foreground"),
                  fontWeight: 500,
                  marginBottom: "8px",
                  textTransform: "capitalize",
                }}
              />
            )}

            <XAxis
              hide={chartConfig?.axis?.x?.show === false}
              dataKey={String(x)}
              axisLine={chartConfig?.axis?.x?.axisLine !== false}
              tickLine={chartConfig?.axis?.x?.tickLine !== false}
              stroke={getColor(
                chartConfig?.axis?.x?.color ?? defaultConfig.axis.x.color
              )}
              fontSize={chartConfig?.axis?.x?.fontSize ?? 12}
              fontFamily={chartConfig?.axis?.x?.fontFamily}
              tickFormatter={chartConfig?.axis?.x?.tickFormatter}
              minTickGap={chartConfig?.axis?.x?.minTickGap}
              angle={chartConfig?.axis?.x?.angle}
              textAnchor={chartConfig?.axis?.x?.textAnchor ?? "middle"}
              tickCount={chartConfig?.axis?.x?.tickCount}
              dy={8}
            />

            <YAxis
              hide={chartConfig?.axis?.y?.show === false}
              axisLine={chartConfig?.axis?.y?.axisLine !== false}
              tickLine={chartConfig?.axis?.y?.tickLine !== false}
              stroke={getColor(
                chartConfig?.axis?.y?.color ?? defaultConfig.axis.y.color
              )}
              fontSize={chartConfig?.axis?.y?.fontSize ?? 12}
              fontFamily={chartConfig?.axis?.y?.fontFamily}
              tickFormatter={chartConfig?.axis?.y?.tickFormatter}
              width={chartConfig?.axis?.y?.width}
              domain={chartConfig?.axis?.y?.domain}
            />

            {chartConfig?.legend?.show !== false && (
              <Legend
                verticalAlign={chartConfig?.legend?.verticalAlign ?? "top"}
                align={chartConfig?.legend?.align ?? "center"}
                height={chartConfig?.legend?.height ?? 40}
                width={chartConfig?.legend?.width}
                iconType={chartConfig?.legend?.iconType ?? "circle"}
                iconSize={chartConfig?.legend?.iconSize ?? 8}
                fontSize={chartConfig?.legend?.fontSize}
                fontFamily={chartConfig?.legend?.fontFamily}
                layout={chartConfig?.legend?.layout ?? "horizontal"}
                wrapperStyle={{
                  paddingTop: chartConfig?.legend?.position === "top" ? 0 : 16,
                  paddingBottom:
                    chartConfig?.legend?.position === "bottom" ? 0 : 16,
                  paddingLeft: chartConfig?.legend?.position === "left" ? 0 : 16,
                  paddingRight:
                    chartConfig?.legend?.position === "right" ? 0 : 16,
                }}
              />
            )}

            {y.map((key: keyof T) => (
              <Line
                key={String(key)}
                type="monotone"
                dataKey={String(key)}
                name={String(key)}
                stroke={getColor(
                  chartConfig?.colors?.[String(key)] ?? colorMap[String(key)]
                )}
                strokeWidth={
                  chartConfig?.types?.line?.strokeWidth ??
                  defaultConfig.types.line.strokeWidth
                }
                activeDot={{
                  r:
                    chartConfig?.types?.line?.activeDot?.r ??
                    defaultConfig.types.line.activeDot.r,
                }}
                style={{
                  stroke: getColor(
                    chartConfig?.colors?.[String(key)] ??
                      colorMap[String(key)] ??
                      `var(--chart-${String(key)})`
                  ),
                }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }

  return (
    <div className={cn("chart w-full", className)} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey={String(y[0])}
            nameKey={String(x)}
            cx="50%"
            cy="50%"
            outerRadius={80}
            label
          />
          <Tooltip
            cursor={false}
            contentStyle={{
              backgroundColor: getColor("background"),
              border: `1px solid ${getColor("border")}`,
              borderRadius: "8px",
              boxShadow:
                "0px 2px 4px rgba(0, 0, 0, 0.1), 0px 4px 16px rgba(0, 0, 0, 0.05)",
              fontSize: "14px",
              padding: "12px",
            }}
            wrapperStyle={{
              outline: "none",
            }}
            itemStyle={{
              color: getColor("foreground"),
            }}
            labelStyle={{
              color: getColor("foreground"),
              fontWeight: 500,
              marginBottom: "8px",
              textTransform: "capitalize",
            }}
          />
          <Legend
            verticalAlign={chartConfig?.legend?.verticalAlign ?? "top"}
            align={chartConfig?.legend?.align ?? "center"}
            height={chartConfig?.legend?.height ?? 40}
            width={chartConfig?.legend?.width}
            iconType={chartConfig?.legend?.iconType ?? 8}
            fontSize={chartConfig?.legend?.fontSize}
            fontFamily={chartConfig?.legend?.fontFamily}
            layout={chartConfig?.legend?.layout ?? "horizontal"}
            wrapperStyle={{
              paddingTop: chartConfig?.legend?.position === "top" ? 0 : 16,
              paddingBottom:
                chartConfig?.legend?.position === "bottom" ? 0 : 16,
              paddingLeft: chartConfig?.legend?.position === "left" ? 0 : 16,
              paddingRight: chartConfig?.legend?.position === "right" ? 0 : 16,
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

function getColorFromPayload(payload, name) {
  return payload?.find((p) => p.dataKey === name)?.color;
}

export const ChartTooltipBase = (props: {
  active: boolean;
  payload: any;
  label: string;
  align?: "left" | "center" | "right";
}) => {
  const { active, payload, label, align } = props;

  if (!active || !payload?.length) {
    return null;
  }

  return (
    <div className="rounded-lg border bg-background p-2 shadow-md">
      <div className={`mb-2 text-xs font-bold ${
        align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center"
      }`}>
        {label}
      </div>
      <div className="flex flex-col gap-0.5">
        {payload.map((entry: any, index: number) => (
          <div
            key={`item-${index}`}
            className="flex items-center justify-between gap-2"
          >
            <div className="flex items-center gap-1">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <div className="whitespace-nowrap text-xs font-medium">
                {entry.name}:
              </div>
            </div>
            <div className="whitespace-nowrap text-xs font-semibold">
              {entry.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ChartTooltip = (props: any) => {
  const { active, payload, label } = props;

  if (!active || !payload?.length) {
    return null;
  }

  return <ChartTooltipBase active={active} payload={payload} label={label} />;
};
