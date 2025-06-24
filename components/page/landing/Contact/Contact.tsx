"use client"
import { FC, useState } from 'react';
import emailjs from '@emailjs/browser';
import SectionContainer from '@/components/utilities/containers/SectionContainer';
import HeadingFourthXL from '@/components/utilities/headings/HeadingFourthXL';
import { landingContents } from '@/contents/landingContents';
import HeadingXL from '@/components/utilities/headings/HeadingXL';
import HeadingSm from '@/components/utilities/headings/HeadingSm';
import DropdownMenu from './widget/DropdownMenu';
import NormalTextInput from './widget/NormalTextInput';
import StatusMessage from './widget/StatusMessage';
import PrimaryButton from '@/components/utilities/buttons/PrimaryButton';

const Contact: FC = () => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    // Create consistent field name mapping
    const fieldNameMap: Record<string, string> = {
        'Country': 'country',
        'Type of Inquiry': 'typeOfInquiry',
        'Migration From': 'migrationFrom',
        'Migration To': 'migrationTo'
    };

    const toFieldName = (displayName: string): string => {
        // Check if we have a predefined mapping first
        if (fieldNameMap[displayName]) {
            return fieldNameMap[displayName];
        }
        
        // Otherwise use the original logic
        return displayName
            .replace(/[^a-zA-Z0-9\s]/g, '')
            .split(' ')
            .map((word, index) => {
                if (index === 0) {
                    return word.toLowerCase();
                }
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            })
            .join('');
    };

    const handleInputChange = (name: string, value: string) => {
        setFormData(prev => ({ ...prev, [name]: value }));
        if (status !== 'idle') {
            setStatus('idle');
            setErrorMessage('');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const requiredFields = ['country', 'firstName', 'lastName', 'emailAddress', 'typeOfInquiry', 'migrationFrom', 'migrationTo'];
        const missingFields = requiredFields.filter(field => !formData[field] || formData[field].trim() === '');
        
        if (missingFields.length > 0) {
            setStatus('error');
            setErrorMessage(`Please fill in all required fields: ${missingFields.join(', ')}`);
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address');
            return;
        }

        setIsSubmitting(true);
        setStatus('idle');
        setErrorMessage('');

        try {
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId) {
                throw new Error('EmailJS configuration missing. Please check your environment variables.');
            }

            // Updated template parameters to match your email template
            const templateParams = {
                // Template variables that match your current template
                name: `${formData.firstName} ${formData.lastName}`,
                company: formData.organization || 'Not provided',
                email: formData.emailAddress,
                migrationFrom: formData.migrationFrom,
                migrationTo: formData.migrationTo,
                
                // Additional detailed information
                firstName: formData.firstName,
                lastName: formData.lastName,
                country: formData.country,
                jobTitle: formData.jobTitle || 'Not provided',
                organization: formData.organization || 'Not provided',
                phoneNumber: formData.phoneNumber || 'Not provided',
                mailboxesToMigrate: formData.mailboxesToMigrate || 'Not provided',
                typeOfInquiry: formData.typeOfInquiry,
                
                // EmailJS standard fields
                from_name: `${formData.firstName} ${formData.lastName}`,
                from_email: formData.emailAddress,
                to_email: 'hello@appnly.com',
                subject: `Landing Page Contact - ${formData.typeOfInquiry}`,
                
                // Full message for backup
                message: `
Landing Page Contact Form Submission:

PERSONAL INFORMATION:
- Full Name: ${formData.firstName} ${formData.lastName}
- Email: ${formData.emailAddress}
- Country: ${formData.country}
- Job Title: ${formData.jobTitle || 'Not provided'}
- Organization: ${formData.organization || 'Not provided'}
- Phone: ${formData.phoneNumber || 'Not provided'}

MIGRATION DETAILS:
- Type of Inquiry: ${formData.typeOfInquiry}
- Migration From: ${formData.migrationFrom}
- Migration To: ${formData.migrationTo}
- Mailboxes to Migrate: ${formData.mailboxesToMigrate || 'Not provided'}

This inquiry was submitted via the website contact form.
                `.trim()
            };

            if (publicKey) {
                await emailjs.send(serviceId, templateId, templateParams, { publicKey });
            } else {
                await emailjs.send(serviceId, templateId, templateParams);
            }
            setStatus('success');
            setFormData({}); // Reset form

        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus('error');
            if (error instanceof Error) {
                setErrorMessage(`Failed to send message: ${error.message}`);
            } else {
                setErrorMessage('Failed to send message. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <SectionContainer className='p-4'>
            <HeadingFourthXL className='
                mb-7
                lg:mb-6
                md:mb-5 md:text-center
                sm:mb-4 sm:text-center
                xs:mb-3 xs:text-center
            '>
                {landingContents.contact.heading}
            </HeadingFourthXL>
            <form
                onSubmit={handleSubmit}
                className='
                    p-[48px] w-full bg-[#fbfbfb] border-[1px] border-solid border-surface-outline
                    lg:p-8
                    md:p-6
                    sm:p-4
                    xs:p-3
                '
            >
                <div className='
                    flex gap-[60px] w-full
                    lg:gap-12
                    md:gap-8
                    sm:flex-col sm:gap-6
                    xs:gap-4
                '>
                    <div className='
                        flex flex-col w-[50%] gap-[16px]
                        lg:gap-4
                        md:gap-3
                        sm:w-full sm:gap-4
                        xs:gap-3
                    '>
                        <HeadingXL className='
                            md:text-center
                            sm:text-center
                            xs:text-center
                        '>
                            {landingContents.contact.form.info.title}
                        </HeadingXL>
                        <span className='
                            flex gap-[20px] items-center w-full
                            lg:gap-4
                            md:gap-3 md:flex-col md:items-center
                            sm:flex-col sm:items-center sm:gap-2
                            xs:gap-2 xs:flex-col xs:items-center
                        '>
                            <HeadingSm className='
                                sm:mb-1
                                md:text-center
                                sm:text-center
                                xs:text-center
                            '>
                                {landingContents.contact.form.info.inputs[0].name}
                            </HeadingSm>
                            <DropdownMenu
                                values={landingContents.contact.form.info.inputs[0].values}
                                value={formData.country}
                                onChange={(value: string) => handleInputChange('country', value)}
                                disabled={isSubmitting}
                            />
                        </span>
                        <span className='
                            flex gap-[16px]
                            lg:gap-3
                            md:gap-2
                            sm:flex-col sm:gap-3
                            xs:gap-2
                        '>
                            <NormalTextInput
                                name="firstName"
                                placeholder={landingContents.contact.form.info.inputs[1].name}
                                value={formData.firstName}
                                onChange={(value: string) => handleInputChange('firstName', value)}
                                disabled={isSubmitting}
                            />
                            <NormalTextInput
                                name="lastName"
                                placeholder={landingContents.contact.form.info.inputs[2].name}
                                value={formData.lastName}
                                onChange={(value: string) => handleInputChange('lastName', value)}
                                disabled={isSubmitting}
                            />
                        </span>
                        {
                            landingContents.contact.form.info.inputs.filter((_, i) => i > 2).map(({ name }, i) => {
                                const fieldName = toFieldName(name);
                                return (
                                    <span key={`${name}-${i}`} className=''>
                                        <NormalTextInput
                                            name={fieldName}
                                            placeholder={name}
                                            value={formData[fieldName]}
                                            onChange={(value: string) => handleInputChange(fieldName, value)}
                                            disabled={isSubmitting}
                                        />
                                    </span>
                                )
                            })
                        }
                    </div>
                    <div className='
                        flex flex-col w-[50%] gap-[16px] relative
                        lg:gap-4
                        md:gap-3
                        sm:w-full sm:gap-4
                        xs:gap-3
                    '>
                        <HeadingXL className='
                            md:text-center
                            sm:text-center
                            xs:text-center
                        '>
                            {landingContents.contact.form.inquiry.title}
                        </HeadingXL>
                        {
                            landingContents.contact.form.inquiry.inputs.map(({ name, values }, i) => {
                                const fieldName = toFieldName(name);
                                return (
                                    <span
                                        key={`${name}-${i}`}
                                        className='
                                            flex gap-[20px] items-center w-full
                                            lg:gap-4
                                            md:gap-3 md:flex-col md:items-center
                                            sm:flex-col sm:items-center sm:gap-2
                                            xs:gap-2 xs:flex-col xs:items-center
                                        '
                                    >
                                        <HeadingSm className='
                                            min-w-[15ch]
                                            sm:min-w-0 sm:mb-1
                                            md:text-center md:min-w-0
                                            sm:text-center
                                            xs:text-center
                                        '>
                                            {name}
                                        </HeadingSm>
                                        <DropdownMenu
                                            values={values}
                                            value={formData[fieldName]}
                                            onChange={(value: string) => handleInputChange(fieldName, value)}
                                            disabled={isSubmitting}
                                        />
                                    </span>
                                )
                            })
                        }

                        {status === 'success' && (
                            <StatusMessage
                                status='success'
                                message='Thank you! Your message has been sent successfully.'
                            />
                        )}

                        {status === 'error' && (
                            <StatusMessage
                                status='error'
                                message={errorMessage}
                            />
                        )}

                        <span className='
                            absolute bottom-0 left-0 right-0
                            sm:relative sm:mt-4
                        '>
                            <PrimaryButton
                                type="submit"
                                className='w-full disabled:opacity-50'
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : landingContents.contact.form.submitButton}
                            </PrimaryButton>
                        </span>
                    </div>
                </div>
            </form>
        </SectionContainer>
    );
};

export default Contact;