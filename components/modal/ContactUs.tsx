"use client"
import { FC, useState } from 'react';
import emailjs from '@emailjs/browser';
import HeadingXL from '@/components/utilities/headings/HeadingXL';
import HeadingSm from '@/components/utilities/headings/HeadingSm';
import InfoBase from '@/components/utilities/paragraphs/InfoBase';
import PrimaryButton from '@/components/utilities/buttons/PrimaryButton';
import { contactModalContents } from '@/app/content/contactModal';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    // Helper function to get field value, always returns a string
    const getFieldValue = (fieldName: string): string => {
        return formData[fieldName] || '';
    };

    // Field name mapping to ensure consistency with EmailJS template
    const getEmailFieldValue = (formFieldName: string): string => {
        return getFieldValue(formFieldName) || 'Not provided';
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation - using exact field names that should be captured
        const newErrors: Record<string, string> = {};

        // Check required fields
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        if (!formData.country) newErrors.country = 'Country is required';
        if (!formData.inquiryType) newErrors.inquiryType = 'Type of inquiry is required';
        if (!formData.migrationFrom) newErrors.migrationFrom = 'Migration from is required';
        if (!formData.migrationTo) newErrors.migrationTo = 'Migration to is required';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // EmailJS configuration
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId) {
                throw new Error('EmailJS configuration missing. Please check your environment variables.');
            }

            // VERIFIED template parameters - matching the enhanced email template exactly
            const templateParams = {
                // Main template variables (your original template)
                name: `${getFieldValue('firstName')} ${getFieldValue('lastName')}`,
                company: getEmailFieldValue('organization'),
                email: getFieldValue('email'),
                migrationFrom: getFieldValue('migrationFrom'),
                migrationTo: getFieldValue('migrationTo'),

                // Enhanced template variables (matching the enhanced template I created)
                firstName: getFieldValue('firstName'),
                lastName: getFieldValue('lastName'),
                country: getFieldValue('country'),
                jobTitle: getEmailFieldValue('jobTitle'),
                organization: getEmailFieldValue('organization'),
                phoneNumber: getEmailFieldValue('phone'),
                mailboxesToMigrate: getEmailFieldValue('mailboxes'),
                typeOfInquiry: getFieldValue('inquiryType'),

                // EmailJS standard fields
                from_name: `${getFieldValue('firstName')} ${getFieldValue('lastName')}`,
                from_email: getFieldValue('email'),
                to_email: 'hello@appnly.com',
                subject: `Modal Contact - ${getFieldValue('inquiryType')}`,

                // Date and time for enhanced template
                date: new Date().toLocaleDateString(),
                time: new Date().toLocaleTimeString(),

                // Full message backup
                message: `
MODAL CONTACT FORM SUBMISSION

PERSONAL INFORMATION:
- Full Name: ${getFieldValue('firstName')} ${getFieldValue('lastName')}
- Email: ${getFieldValue('email')}
- Country: ${getFieldValue('country')}
- Job Title: ${getEmailFieldValue('jobTitle')}
- Organization: ${getEmailFieldValue('organization')}
- Phone: ${getEmailFieldValue('phone')}
- Mailboxes to Migrate: ${getEmailFieldValue('mailboxes')}

MIGRATION INQUIRY:
- Type of Inquiry: ${getFieldValue('inquiryType')}
- Migration From: ${getFieldValue('migrationFrom')}
- Migration To: ${getFieldValue('migrationTo')}

Submitted via: Website Modal Contact Form
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}
                `.trim()
            };


            // Send email using EmailJS
            if (publicKey) {
                await emailjs.send(serviceId, templateId, templateParams, { publicKey });
            } else {
                await emailjs.send(serviceId, templateId, templateParams);
            }

            setSubmitStatus('success');

            // Reset form and close modal after success
            setTimeout(() => {
                setFormData({});
                setSubmitStatus('idle');
                setErrors({});
                onClose();
            }, 2000);

        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <div
            className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-start justify-center z-50 p-0 overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget && !isSubmitting) {
                    onClose();
                }
            }}
        >
            {/* Modal container - responsive based on max-width breakpoints */}
            <div className="
                bg-white w-[90vw] max-w-5xl rounded-[12px] my-8 max-h-[90vh] overflow-y-auto shadow-2xl
                lg:w-full lg:max-w-none lg:min-h-screen lg:rounded-none lg:my-0 lg:max-h-none
                md:w-full md:max-w-none md:min-h-screen md:rounded-none md:my-0 md:max-h-none
                sm:w-full sm:max-w-none sm:min-h-screen sm:rounded-none sm:my-0 sm:max-h-none
                xs:w-full xs:max-w-none xs:min-h-screen xs:rounded-none xs:my-0 xs:max-h-none
            ">
                {/* Header */}
                <div className="
                    border-b border-gray-200 p-8
                    lg:p-6
                    md:p-4
                    sm:p-4
                    xs:p-4
                ">
                    <div className="flex justify-between items-center">
                        <div className="flex-1 pr-4">
                            <HeadingXL className="
                                text-3xl
                                lg:text-center lg:text-3xl
                                md:text-center md:text-2xl
                                sm:text-center sm:text-xl
                                xs:text-center xs:text-xl
                            ">
                                {contactModalContents.title}
                            </HeadingXL>
                            <InfoBase className="
                                text-base mt-2
                                lg:text-center lg:text-base
                                md:text-center md:text-sm
                                sm:text-center sm:text-sm
                                xs:text-center xs:text-sm
                                text-gray-600
                            ">
                                {contactModalContents.subtitle}
                            </InfoBase>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors disabled:opacity-50 flex-shrink-0"
                            disabled={isSubmitting}
                            aria-label="Close modal"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Form content */}
                <div className="
                    p-8
                    lg:p-6
                    md:p-4
                    sm:p-4
                    xs:p-4
                ">
                    <form onSubmit={handleSubmit} className="w-full">
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <div className="
                                mb-8 p-4 bg-green-50 border border-green-200 rounded-md
                                lg:mb-6
                                md:mb-4
                                sm:mb-4
                                xs:mb-4
                            ">
                                <InfoBase className="
                                    text-green-800 text-base
                                    lg:text-center
                                    md:text-center
                                    sm:text-center
                                    xs:text-center
                                ">
                                    ✅ Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                                </InfoBase>
                            </div>
                        )}

                        {submitStatus === 'error' && (
                            <div className="
                                mb-8 p-4 bg-red-50 border border-red-200 rounded-md
                                lg:mb-6
                                md:mb-4
                                sm:mb-4
                                xs:mb-4
                            ">
                                <InfoBase className="
                                    text-red-800 text-base
                                    lg:text-center
                                    md:text-center
                                    sm:text-center
                                    xs:text-center
                                ">
                                    ❌ Sorry, there was an error sending your message. Please try again or contact us directly.
                                </InfoBase>
                            </div>
                        )}

                        {/* Form Layout - Desktop: side-by-side, Mobile: stacked */}
                        <div className="
                            flex gap-16
                            lg:flex-col lg:gap-12
                            md:flex-col md:gap-8
                            sm:flex-col sm:gap-6
                            xs:flex-col xs:gap-6
                        ">
                            {/* Personal Info Section */}
                            <div className="w-1/2 lg:w-full md:w-full sm:w-full xs:w-full">
                                <HeadingXL className="
                                    mb-8 text-xl
                                    lg:mb-6 lg:text-center lg:text-xl
                                    md:mb-5 md:text-center md:text-lg
                                    sm:mb-4 sm:text-center sm:text-lg
                                    xs:mb-4 xs:text-center xs:text-lg
                                ">
                                    Personal & Organization Info:
                                </HeadingXL>

                                {/* Country Field */}
                                <div className="
                                    flex items-center gap-6 mb-6
                                    lg:flex-col lg:items-center lg:gap-4
                                    md:flex-col md:items-center md:gap-3
                                    sm:flex-col sm:items-center sm:gap-2
                                    xs:flex-col xs:items-center xs:gap-2
                                ">
                                    <HeadingSm className="
                                        min-w-[15ch]
                                        lg:min-w-0 lg:text-center
                                        md:min-w-0 md:text-center
                                        sm:min-w-0 sm:text-center
                                        xs:min-w-0 xs:text-center
                                    ">
                                        Country:
                                    </HeadingSm>
                                    <select
                                        value={getFieldValue('country')}
                                        onChange={(e) => handleInputChange('country', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center
                                            md:text-center
                                            sm:text-center
                                            xs:text-center
                                        "
                                        required
                                        disabled={isSubmitting}
                                    >
                                        <option value="">Select an option...</option>
                                        <option value="United States">United States</option>
                                        <option value="United Kingdom">United Kingdom</option>
                                        <option value="Australia">Australia</option>
                                        <option value="Canada">Canada</option>
                                        <option value="Germany">Germany</option>
                                        <option value="France">France</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                {errors.country && (
                                    <InfoBase className="
                                        text-red-500 text-sm mb-4
                                        lg:text-center
                                        md:text-center
                                        sm:text-center
                                        xs:text-center
                                    ">
                                        {errors.country}
                                    </InfoBase>
                                )}

                                {/* Name Fields */}
                                <div className="
                                    flex gap-4 mb-6
                                    lg:flex-col lg:gap-4
                                    md:flex-col md:gap-3
                                    sm:flex-col sm:gap-3
                                    xs:flex-col xs:gap-2
                                ">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        value={getFieldValue('firstName')}
                                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        required
                                        disabled={isSubmitting}
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        value={getFieldValue('lastName')}
                                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        required
                                        disabled={isSubmitting}
                                    />
                                </div>
                                {(errors.firstName || errors.lastName) && (
                                    <div className="mb-4">
                                        {errors.firstName && (
                                            <InfoBase className="
                                                text-red-500 text-sm
                                                lg:text-center
                                                md:text-center
                                                sm:text-center
                                                xs:text-center
                                            ">
                                                {errors.firstName}
                                            </InfoBase>
                                        )}
                                        {errors.lastName && (
                                            <InfoBase className="
                                                text-red-500 text-sm
                                                lg:text-center
                                                md:text-center
                                                sm:text-center
                                                xs:text-center
                                            ">
                                                {errors.lastName}
                                            </InfoBase>
                                        )}
                                    </div>
                                )}

                                {/* Other Personal Fields with explicit field names */}
                                <div className="mb-6">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={getFieldValue('email')}
                                        onChange={(e) => handleInputChange('email', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        required
                                        disabled={isSubmitting}
                                    />
                                    {errors.email && (
                                        <InfoBase className="
                                            text-red-500 text-sm mt-2
                                            lg:text-center
                                            md:text-center
                                            sm:text-center
                                            xs:text-center
                                        ">
                                            {errors.email}
                                        </InfoBase>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Job Title"
                                        value={getFieldValue('jobTitle')}
                                        onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Organization"
                                        value={getFieldValue('organization')}
                                        onChange={(e) => handleInputChange('organization', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        value={getFieldValue('phone')}
                                        onChange={(e) => handleInputChange('phone', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        disabled={isSubmitting}
                                    />
                                </div>

                                <div className="mb-6">
                                    <input
                                        type="text"
                                        placeholder="Mailboxes to Migrate"
                                        value={getFieldValue('mailboxes')}
                                        onChange={(e) => handleInputChange('mailboxes', e.target.value)}
                                        className="
                                            w-full p-3 text-base border border-gray-300 rounded-md 
                                            focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                            lg:text-center lg:placeholder:text-center
                                            md:text-center md:placeholder:text-center
                                            sm:text-center sm:placeholder:text-center
                                            xs:text-center xs:placeholder:text-center
                                        "
                                        disabled={isSubmitting}
                                    />
                                </div>
                            </div>

                            {/* Migration Inquiry Section */}
                            <div className="w-1/2 lg:w-full md:w-full sm:w-full xs:w-full">
                                <HeadingXL className="
                                    mb-8 text-xl
                                    lg:mb-6 lg:text-center lg:text-xl
                                    md:mb-5 md:text-center md:text-lg
                                    sm:mb-4 sm:text-center sm:text-lg
                                    xs:mb-4 xs:text-center xs:text-lg
                                ">
                                    Migration Inquiry:
                                </HeadingXL>

                                {/* Type of Inquiry */}
                                <div className="mb-6">
                                    <div className="
                                        flex items-center gap-6
                                        lg:flex-col lg:items-center lg:gap-4
                                        md:flex-col md:items-center md:gap-3
                                        sm:flex-col sm:items-center sm:gap-2
                                        xs:flex-col xs:items-center xs:gap-2
                                    ">
                                        <HeadingSm className="
                                            min-w-[15ch]
                                            lg:min-w-0 lg:text-center
                                            md:min-w-0 md:text-center
                                            sm:min-w-0 sm:text-center
                                            xs:min-w-0 xs:text-center
                                        ">
                                            Type of Inquiry:
                                        </HeadingSm>
                                        <select
                                            value={getFieldValue('inquiryType')}
                                            onChange={(e) => handleInputChange('inquiryType', e.target.value)}
                                            className="
                                                w-full p-3 text-base border border-gray-300 rounded-md 
                                                focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                                lg:text-center
                                                md:text-center
                                                sm:text-center
                                                xs:text-center
                                            "
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Email Migration">Email Migration</option>
                                            <option value="Data Migration">Data Migration</option>
                                            <option value="General Inquiry">General Inquiry</option>
                                            <option value="Support">Support</option>
                                        </select>
                                    </div>
                                    {errors.inquiryType && (
                                        <InfoBase className="
                                            text-red-500 text-sm mt-2
                                            lg:text-center
                                            md:text-center
                                            sm:text-center
                                            xs:text-center
                                        ">
                                            {errors.inquiryType}
                                        </InfoBase>
                                    )}
                                </div>

                                {/* Migration From */}
                                <div className="mb-6">
                                    <div className="
                                        flex items-center gap-6
                                        lg:flex-col lg:items-center lg:gap-4
                                        md:flex-col md:items-center md:gap-3
                                        sm:flex-col sm:items-center sm:gap-2
                                        xs:flex-col xs:items-center xs:gap-2
                                    ">
                                        <HeadingSm className="
                                            min-w-[15ch]
                                            lg:min-w-0 lg:text-center
                                            md:min-w-0 md:text-center
                                            sm:min-w-0 sm:text-center
                                            xs:min-w-0 xs:text-center
                                        ">
                                            Migration From:
                                        </HeadingSm>
                                        <select
                                            value={getFieldValue('migrationFrom')}
                                            onChange={(e) => handleInputChange('migrationFrom', e.target.value)}
                                            className="
                                                w-full p-3 text-base border border-gray-300 rounded-md 
                                                focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                                lg:text-center
                                                md:text-center
                                                sm:text-center
                                                xs:text-center
                                            "
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Gmail">Gmail</option>
                                            <option value="Outlook">Outlook</option>
                                            <option value="Exchange">Exchange</option>
                                            <option value="Yahoo">Yahoo</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    {errors.migrationFrom && (
                                        <InfoBase className="
                                            text-red-500 text-sm mt-2
                                            lg:text-center
                                            md:text-center
                                            sm:text-center
                                            xs:text-center
                                        ">
                                            {errors.migrationFrom}
                                        </InfoBase>
                                    )}
                                </div>

                                {/* Migration To */}
                                <div className="mb-6">
                                    <div className="
                                        flex items-center gap-6
                                        lg:flex-col lg:items-center lg:gap-4
                                        md:flex-col md:items-center md:gap-3
                                        sm:flex-col sm:items-center sm:gap-2
                                        xs:flex-col xs:items-center xs:gap-2
                                    ">
                                        <HeadingSm className="
                                            min-w-[15ch]
                                            lg:min-w-0 lg:text-center
                                            md:min-w-0 md:text-center
                                            sm:min-w-0 sm:text-center
                                            xs:min-w-0 xs:text-center
                                        ">
                                            Migration To:
                                        </HeadingSm>
                                        <select
                                            value={getFieldValue('migrationTo')}
                                            onChange={(e) => handleInputChange('migrationTo', e.target.value)}
                                            className="
                                                w-full p-3 text-base border border-gray-300 rounded-md 
                                                focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100
                                                lg:text-center
                                                md:text-center
                                                sm:text-center
                                                xs:text-center
                                            "
                                            required
                                            disabled={isSubmitting}
                                        >
                                            <option value="">Select an option...</option>
                                            <option value="Microsoft 365">Microsoft 365</option>
                                            <option value="Google Workspace">Google Workspace</option>
                                            <option value="Exchange Online">Exchange Online</option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    {errors.migrationTo && (
                                        <InfoBase className="
                                            text-red-500 text-sm mt-2
                                            lg:text-center
                                            md:text-center
                                            sm:text-center
                                            xs:text-center
                                        ">
                                            {errors.migrationTo}
                                        </InfoBase>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <div className="mt-8">
                                    <PrimaryButton
                                        type="submit"
                                        className="w-full disabled:opacity-50 disabled:cursor-not-allowed text-base py-4"
                                        disabled={isSubmitting || submitStatus === 'success'}
                                    >
                                        {isSubmitting ? 'Sending...' : 'Submit'}
                                    </PrimaryButton>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;