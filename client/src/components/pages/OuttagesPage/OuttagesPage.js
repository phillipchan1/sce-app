// libraries
import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'react-router-dom';

// components
import BodyCard from '../../atoms/BodyCard/BodyCard';
import OuttageCard from '../../molecules/OuttageCard/OuttageCard';

@inject('OuttageStore')
@observer
class OuttagesPage extends Component {
	render() {
		return (
			<BodyCard className="outtages">
				<h1>Outtages</h1>
				<p>See outtages in the area</p>

				{this.props.OuttageStore.outtages.map(outtage => {
					return (
						<Link
							key={outtage._id}
							to={`/admin/outtage/${outtage._id}`}
						>
							<OuttageCard {...outtage} />
						</Link>
					);
				})}
			</BodyCard>
		);
	}
}

export default OuttagesPage;
