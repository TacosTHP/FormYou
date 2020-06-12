import React from 'react';
// Components
// import CompanyCards from '../../components/Company/CompanyCards';
import FormationCards from '../../components/Formation/FormationCards';
import Header from '../../components/Home/Header';

const Home = () => {
	return (
		<div>
			<Header />
			<section className='mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12 mx-auto'>
							<p>Ut aliquet efficitur justo, sit amet dignissim ante feugiat eget. Morbi nisl sem, rhoncus id pellentesque id, fermentum a odio. Mauris erat arcu, scelerisque a rutrum non, posuere in mi. Nam ornare erat laoreet, rutrum dolor at, molestie odio. Proin finibus condimentum neque non ullamcorper. Sed a venenatis ligula. Vestibulum mi justo, congue eu metus quis, dictum convallis orci. Ut eleifend felis in ante mollis aliquet.</p>
							<p>Video Header created by
								<a href='https://startbootstrap.com'> Start Bootstrap</a>
								.
							</p>
							<p className='display-4 mt-3'>Formations</p>
							<FormationCards />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;
