import React from 'react'

export default function Subscribe({ status, message, onValidated }) {
  let email, fName, lName;
  const submit = () =>
    email &&
    fName &&
    lName &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
      FNAME: fName.value,
      LNAME: lName.value
    });

  return (
    <div className='subscribe-main'>
      <div className='subscribe-txt-1 Biotif-Book'>
        Wake up to
        <br />
        The Established.
      </div>
      <div className='subscribe-txt-2 Biotif-Regular'>
        From what’s hot to what’s next—get a fresh perspective on <br />

        fashion, beauty and culture straight in your inbox.
      </div>
      <div className='subscribe-txt-2 Biotif-Regular'>
        Become a part of our community of conscious, authentic <br />
        and well-informed, progressive readers. Sign up below.
      </div>
      <div className='subscribe-input-1'>
        <div>

          <input className='Biotif-Regular' type="text" placeholder='First Name' ref={node => (fName = node)} />
        </div>
        <div>

          <input className='Biotif-Regular' type="text" placeholder='Last Name' ref={node => (lName = node)} />
        </div>
      </div>
      <div className='subscribe-input-2'>
        <input className='Biotif-Regular' type="email" placeholder='E-Mail' ref={node => (email = node)} />
        <button className='Biotif-Regular' onClick={submit}>SUBSCRIBE</button>

      </div>
      {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
      {status === "error" && (
        <div
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}

    </div>
  )
}
