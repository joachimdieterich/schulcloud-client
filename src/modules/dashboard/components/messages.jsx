

require('../styles/messages.scss');

class SectionMessages extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<section className="section-messages">
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-7">
							<div className="row">
								<h5>Briefkasten <span className="tag tag-default">23</span></h5>
							</div>

							<div className="row messages">
								<div className="row message">
									<div className="col-sm-2">
										<img className="avatar" src="https://randomuser.me/api/portraits/men/1.jpg" /><strong>Tom</strong>
									</div>
									<div className="col-sm-10">
										<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
									</div>
								</div>

								<div className="row message">
									<div className="col-sm-2">
										<img className="avatar" src="https://randomuser.me/api/portraits/women/91.jpg" /><strong>Jana</strong>
									</div>
									<div className="col-sm-10">
										<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-sm-4 offset-sm-1">
							<div className="row">
								<h5>Mitteilungen</h5>
							</div>
							<div className="row notices">
								<div className="row notice">
									<div className="col-sm-12">
										<div className="alert alert-info alert-dismissible" role="alert">
											<button type="button" className="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										</div>
									</div>
								</div>
								<div className="row notice">
									<div className="col-sm-12">
										<div className="alert alert-info alert-dismissible" role="alert">
											<button type="button" className="close" data-dismiss="alert" aria-label="Close">
												<span aria-hidden="true">&times;</span>
											</button>
											<strong>Holy guacamole!</strong> You should check in on some of those fields below.
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}

}

export default SectionMessages;