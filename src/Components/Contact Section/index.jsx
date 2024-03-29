import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import {
  ContactSectionContainer,
  ContactSectionWrapper,
  ContactFormWrapper,
  ContactFormTitle,
  ContactForm,
  NameEmailWrapper,
  ContactFormInput,
  ContactFormButton,
  MapWrapper,
  ContactFormMessage,
} from "./ContactFormElements";
import { InfoHeading } from "../Infosection/InfoElements";

class ContactSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onSubjectChange = this.onSubjectChange.bind(this);
    this.onMessageChange = this.onMessageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  render() {
    return (
      <ContactSectionContainer>
        <InfoHeading>Contact Us</InfoHeading>
        <ContactSectionWrapper data-aos="zoom-in">
          <ContactFormWrapper>
            <ContactFormTitle>Get in touch</ContactFormTitle>
            <ContactForm>
              <NameEmailWrapper>
                <ContactFormInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  onChange={this.onNameChange}
                  value={this.state.name}
                  required
                />
                <ContactFormInput
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={this.onEmailChange}
                  value={this.state.email}
                  required
                />
              </NameEmailWrapper>
              <ContactFormInput
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                onChange={this.onSubjectChange}
                value={this.state.subject}
                required
              />
              <ContactFormMessage
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                onChange={this.onMessageChange}
                value={this.state.message}
                required
              />
              <ContactFormButton
                type="button"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </ContactForm>
          </ContactFormWrapper>
          <LazyLoadComponent>
            <MapWrapper>
              <Map
                className="map"
                google={this.props.google}
                zoom={15}
                initialCenter={{ lat: 12.9396425, lng: 77.5572237 }}
              >
                <Marker />
              </Map>
            </MapWrapper>
          </LazyLoadComponent>
        </ContactSectionWrapper>
      </ContactSectionContainer>
    );
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onSubjectChange(e) {
    this.setState({ subject: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    const serviceId = "service_desju56";
    const templateId = "template_07369pi";

    let error = [];

    if (this.state.name === "") {
      error += "name";
      document.getElementsByName("name")[0].placeholder =
        "Please fill this field";
    }
    if (this.state.email === "") {
      error += "email";
      document.getElementsByName("email")[0].placeholder =
        "Please fill this field";
    }
    if (this.state.subject === "") {
      error += "subject";
      document.getElementsByName("subject")[0].placeholder =
        "Please fill this field";
    }
    if (this.state.message === "") {
      error += "message";
      document.getElementsByName("message")[0].placeholder =
        "Please fill this field";
    }

    if (error == "") {
      this.sendEmail(serviceId, templateId, {
        from_name: this.state.name,
        reply_to: this.state.email,
        subject: this.state.subject,
        message: this.state.message,
      });
    } else {
      console.log(
        this.state.name,
        this.state.email,
        this.state.subject,
        this.state.message,
        error
      );
    }
  }

  resetForm() {
    this.setState({ name: "", email: "", subject: "", message: "" });
  }

  sendEmail(serviceId, templateId, variables) {
    window.emailjs
      .send(serviceId, templateId, variables)
      .then((res) => {
        console.log(res, "Email sent successfully!");
        this.resetForm();
      })
      .catch((err) => {
        console.error("Couldn't send email: ", err);
      });
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBSEq_IJNSy4HV6g552uOmNf5g5B0F43lM",
})(ContactSection);
