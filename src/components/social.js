import React from 'react'
import styles from '../styles/base.module.less'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Social = () => (
    <section className={styles.social}>
        <ul className={styles.iconWrap}>
            <li>
                <a href="https://twitter.com/LadiesThatUXBOS" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="3x"/>
                    <span className="label">Twitter</span>
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/LTUXBOS/" target="_blank">
                    <FontAwesomeIcon icon={faFacebook} size="3x"/>
                    <span className="label">Facebook</span>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/ladiesthatuxbos/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                    <span className="label">Instagram</span>
                </a>
            </li>
            <li>
                <a href="linkedin.com/company/ladies-that-ux-boston" target="_blank">
                	<FontAwesomeIcon icon={faLinkedin} size="3x"/>
                	<span className="label">LinkedIn</span>
                </a>
            </li>
        </ul>
    </section>
)

export default Social;