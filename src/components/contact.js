import React from 'react'
import styles from '../styles/contact.module.less'

const Contact = (props) => (
    <section id="contact">
        <form name="contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">

            <input type="hidden" name="bot-field" />

            <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required/>
            </div>
            <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" required/>
            </div>
            <div className={styles.field}>
                <label htmlFor="message">Your message</label>
                <textarea name="message" id="message" rows="6" required></textarea>
            </div>
            <input type="submit" value="Send Message" className={styles.submitButton} />
        </form>
    </section>
)

export default Contact
