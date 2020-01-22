import React from "react"

export default class IndexPage extends React.Component {
  state = {
    name: "",
    email: "",
    message: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState = ({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.name}!`)
  }
  render() {
    return (
      <form method="post" action="/thanks" name="contact" data-netlify="true" data-netlify-honeypot="bot-field" className="contact-form">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label for="name">
            <span class="label">Name*</span>
            <input type="text" name="name" placeholder="Your Name" required value={this.state.Name} onChange={this.handleInputChange} />
          </label>
        </p>
        <p>
          <label for="email">
            <span class="label">Email*</span>
            <input type="email" name="email" placeholder="your@email.com" requiredvalue={this.state.Email} onChange={this.handleInputChange} />
          </label>
        </p>
        <p>
          <label for="message">
            <span class="label">Message</span>
            <textarea name="message" placeholder="Well, hi!" value={this.state.Message} onChange={this.handleInputChange} />
          </label>
        </p>
        <p>
          <button type="submit">Let's talk!</button>
        </p>
      </form>
    )
  }
}