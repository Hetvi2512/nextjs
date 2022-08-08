import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Subscribe from '../../common/Subscribe/Subscribe';

const Mailchimp = () => {
    const url = "https://theestablished.us5.list-manage.com/subscribe/post?u=8a608f298f4e1786ac7c33aac&amp;id=59eaf016b4";

  return (
      <div>
          <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <Subscribe
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
            />
            )}
            />
            </div>
  )
}

export default Mailchimp