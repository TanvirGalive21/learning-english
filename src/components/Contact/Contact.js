import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./Contact.css"

const Contact = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="section-padding">
			<div className="container">
				<div className="row">
					<div className="col-md-8">
						<div className="white-box">
							<h4>Send us a message</h4>
							<div className="contact-form">
								<form action="https://formspree.io/galivetanvir@gmail.com" method="POST">
									<div className="row">
										<div className="col-md-6">
											<input name="First Name" type="text" placeholder="First Name" required/>
											<input name="Email" type="email" placeholder="Email Address" required/>
										</div>
										<div className="col-md-6">
											<input name="Last Name" type="text" placeholder="Last Name" required/>
											<input name="Phone" type="tel" placeholder="Phone Number" required/>
										</div>
										<div className="col-md-12">
											<textarea name="Message" id="message" cols="30" rows="10" placeholder="Your message" required></textarea>
										</div>
										<div className="col-md-12">
											<input type="submit" value="Send Message" />
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					
					<div className="col-md-4">
						<div className="colored-box">
							<h4>Get in touch</h4>
							<div className="contact-info">
								<p><i className="fa fa-home"></i>MastarPara, Naogaon,  <br /> Bangladesh</p>
								<p><i className="fa fa-phone"></i>+8801718334455 <br /> +8801718349689</p>
								<p><i className="fa fa-envelope"></i>info@website.com <br /> info@website.com</p>
							</div>
							<div className="social-icons">
								<p href="#" target="_blank"><i className="fa fa-facebook"></i></p>
								<p href="#" target="_blank"><i className="fa fa-twitter"></i></p>
								<p href="#" target="_blank"><i className="fa fa-instagram"></i></p>
								<p href="#" target="_blank"><i className="fa fa-youtube"></i></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;