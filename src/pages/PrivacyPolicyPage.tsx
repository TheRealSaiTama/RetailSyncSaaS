import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
      <Navbar />
      <main className="flex-grow pt-28 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center p-3 bg-retail-blue/10 rounded-full mb-4">
              <ShieldCheck size={32} className="text-retail-blue" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last Updated: April 12, 2025</p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none bg-card dark:bg-card p-8 rounded-lg shadow-md border border-border dark:border-border transition-colors"
          >
            <p>
              RetailSync ("us", "we", or "our") operates the RetailSync website and the RetailSync SaaS platform (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>

            <h2>1. Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you. This may include, but is not limited to:
            </p>
            <ul>
              <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include email address, name, phone number, company information, etc.</li>
              <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</li>
              <li><strong>Business Data:</strong> To provide the core functionality of our Service, we process data you upload or connect, such as sales data, inventory levels, supplier information, and customer transaction history ("Business Data"). We treat this data with the utmost confidentiality and use it solely to provide and improve the Service as outlined in our Terms of Service.</li>
            </ul>

            <h2>2. Use of Data</h2>
            <p>RetailSync uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To process your Business Data to generate insights, forecasts, and optimizations as part of the Service</li>
            </ul>

            <h2>3. Data Security</h2>
            <p>
              The security of your data is important to us. We implement industry-standard security measures (including encryption, access controls, and regular audits) to protect your Personal Data and Business Data. However, remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>

            <h2>4. Data Retention</h2>
            <p>
              We will retain your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your Personal Data to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our legal agreements and policies. Business Data is retained according to the terms agreed upon in your service agreement.
            </p>

            <h2>5. Your Data Protection Rights</h2>
            <p>
              Depending on your location, you may have certain data protection rights. RetailSync aims to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data. Please contact us to find out more or exercise your rights.
            </p>

            <h2>6. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul>
              <li>By email: privacy@retailsync.example.com</li>
              <li>By visiting this page on our website: [Link to Contact Page]</li>
            </ul>
            <p><i>[Disclaimer: This is a template and should be reviewed and customized by legal counsel to ensure compliance with all applicable laws and regulations.]</i></p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
