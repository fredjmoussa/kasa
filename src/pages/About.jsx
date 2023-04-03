import React from 'react';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import Header from '../components/Header';
import Collapse from '../components/Collapse';
import '../styles/components/about.scss';

export default function About () {

	const aboutDescriptions = [
		{
			"id": "1",
			"titre": "Fiabilité",
			"description": "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
		},
		{
			"id": "2",
			"titre": "Respect",
			"description": "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
		},
		{
			"id": "3",
			"titre": "Service",
			"description": "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
		},
		{
			"id": "4",
			"titre": "Sécurité",
			"description": "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
		}
	]

    	return (
		<div>
			<Header />
			<Banner text="" className="about"/>
			<main className='main'>
				{aboutDescriptions.map(data => {
					return (
						<div key={data.id} className="collapse">
							<Collapse style={{margin:'30px 0'}}  titre={data.titre} description={data.description} />
						</div>
					)}
				)}
			</main>
			<Footer />
		</div>
	)
}
