import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const TermsOfServicePage = () => {
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
             <div className="inline-flex items-center justify-center p-3 bg-retail-teal/10 rounded-full mb-4">
               <FileText size={32} className="text-retail-teal" />
             </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Terms of Service</h1>
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
              Welcome to RetailSync! These Terms of Service ("Terms") govern your access to and use of the RetailSync website and the RetailSync SaaS platform (collectively, the "Service"), operated by RetailSync ("us", "we", or "our"). Please read these Terms carefully before using the Service.
            </p>

            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>

            <h2>2. Service Description</h2>
            <p>
              RetailSync provides a multi-agent AI platform designed to optimize retail inventory management through demand forecasting, inventory optimization, dynamic pricing, and supply chain coordination features. The specific features and functionalities available to you depend on your chosen subscription plan.
            </p>

            <h2>3. Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service. You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password. You agree not to disclose your password to any third party.
            </p>

            <h2>4. Use of the Service</h2>
            <p>
              You agree not to use the Service:
            </p>
            <ul>
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate RetailSync, a RetailSync employee, another user, or any other person or entity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm RetailSync or users of the Service or expose them to liability.</li>
              <li>To attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Service, the server on which the Service is stored, or any server, computer, or database connected to the Service.</li>
            </ul>

            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and functionality are and will remain the exclusive property of RetailSync and its licensors. The Service is protected by copyright, trademark, and other laws of both the [Your Country] and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of RetailSync.
            </p>
             <h2>6. User Content and Business Data</h2>
             <p>
               You retain ownership of all data, information, and materials that you upload, submit, or otherwise make available through the Service ("User Content" and "Business Data"). By providing User Content and Business Data, you grant us a worldwide, non-exclusive, royalty-free license to use, process, store, reproduce, modify, and display such data solely for the purpose of providing and improving the Service. You are solely responsible for the accuracy, quality, integrity, legality, reliability, and appropriateness of all User Content and Business Data.
             </p>

            <h2>7. Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
            </p>

            <h2>8. Limitation of Liability</h2>
            <p>
              In no event shall RetailSync, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth herein is found to have failed of its essential purpose.
            </p>

            <h2>9. Disclaimer</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>

            <h2>10. Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of [Your Jurisdiction, e.g., State of California, USA], without regard to its conflict of law provisions.
            </p>

            <h2>11. Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2>12. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us:
            </p>
            <ul>
              <li>By email: legal@retailsync.example.com</li>
              <li>By visiting this page on our website: [Link to Contact Page]</li>
            </ul>
             <p><i>[Disclaimer: This is a template and should be reviewed and customized by legal counsel to fit your specific business model, jurisdiction, and practices.]</i></p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;