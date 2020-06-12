import React from 'react';
// Components
import SessionUser from '../../components/Session/SessionUser';
// import StudentForm from '../../components/Student/StudentForm';

const StudentShow = () => {
	return (
		<section className='mt-5'>
			<div className='container'>
				<div className='row'>
					<div className='col-md-12 mx-auto'>
						<p className='display-4 mt-3'>Your Sessions</p>
						<SessionUser />
					</div>
				</div>
			</div>
		</section>
	);
};

export default StudentShow;

//						<p className='display-3'>Hello + Student FirstName !</p>
//						<p className='display-4'>Your Profile</p>
//						<StudentForm />
