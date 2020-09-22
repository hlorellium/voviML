import React from 'react';
import { FormStyled, ErrorDiv } from '../styled-components';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    message: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
});

export const ContactUsForm = ({ contactUs }) => {
    const encode = (data) => {
        return Object.keys(data)
            .map(
                (key) =>
                    encodeURIComponent(key) +
                    '=' +
                    encodeURIComponent(data[key])
            )
            .join('&');
    };
    return (
        <Formik
            initialValues={{
                name: '',
                email: '',
                phone: '',
                message: '',
            }}
            validationSchema={SignupSchema}
            onSubmit={async (
                values,
                { resetForm, setSubmitting, setErrors }
            ) => {
                try {
                    await fetch('/', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: encode({ 'form-name': 'contact', ...values }),
                    });
                    resetForm({});
                } catch (error) {
                    setSubmitting(false);
                    setErrors({ submit: error.message });
                }
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <FormStyled>
                    <Form>
                        <input type="hidden" name="form-name" value="contact" />
                        <h1>{contactUs.header}</h1>

                        <label className="name-label">
                            <span>{contactUs.labelName}:</span>{' '}
                            <Field name="name" placeholder={contactUs.labelName} />
                            {errors.name && touched.name ? (
                                <ErrorDiv>{errors.name}</ErrorDiv>
                            ) : null}
                        </label>

                        <label className="email-label">
                            <span>{contactUs.labelMail}:</span>{' '}
                            <Field
                                name="email"
                                type="email"
                                placeholder="example@example.com"
                            />
                            {errors.email && touched.email ? (
                                <ErrorDiv>{errors.email}</ErrorDiv>
                            ) : null}
                        </label>

                        <label className="phone-label">
                            <span>{contactUs.labelPhone}:</span>{' '}
                            <Field
                                name="phone"
                                type="tel"
                                placeholder="+7(999)-999-99-99"
                            />
                            {errors.phone && touched.phone ? (
                                <ErrorDiv>{errors.phone}</ErrorDiv>
                            ) : null}
                        </label>
                        <label className="message-label">
                            <span>{contactUs.labelMessage}:</span>{' '}
                            <Field as="textarea" name="message" type="text" placeholder={contactUs.labelMessage} />
                            {errors.message && touched.message ? (
                                <ErrorDiv>{errors.message}</ErrorDiv>
                            ) : null}
                        </label>

                        <button type="submit" disabled={isSubmitting}>
                            {contactUs.button}
                        </button>
                    </Form>
                </FormStyled>
            )}
        </Formik>
    );
};
