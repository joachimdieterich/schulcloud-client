import {
	Checkbox,
	CheckboxGroup,
	Icon,
	Input,
	RadioGroup,
	Row,
	Select,
	File,
	Textarea,
	ReactSelect,
	Form
} from '../../core/helpers/form';
import {Link} from 'react-router';

import Table from '../../administration/components/table';
import AdminSectionCourses from '../../administration/components/courses';

class SignupFormCourses extends AdminSectionCourses {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Administration: <br />Kurse</h1>

				<p>Sie können nun Kurse anlegen und diesen Lehrkräfte zuweisen.</p>
				<p>"Kurse" bezeichnet sowohl Kurse in der Oberstufe, als auch Fächer für
					jede Klasse der Mittelstufe (also zum Beispiel "Mathe für die 10a").</p>

				<p><b>Tipp:</b> Lehrer können auch selber Kurse anlegen.</p>

				<Form>
					<div className="row">
						<div className="col-md-12">
							<Table head={this.getTableHead()} body={this.getTableBody()} />
						</div>
					</div>
				</Form>

				<button type="submit" className="btn btn-success" onClick={this.openModal.bind(this, this.defaultRecord)}>
					Kurs hinzufügen
				</button>

				{this.modalUI()}

				<hr />

				<button className="btn btn-secondary" onClick={this.props.onSignupFinished.bind(this)}>Abschließen</button>
			</div>
		);
	}

}

export default SignupFormCourses;


