import React from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCharacterAction, updateCharacterAction, addPropertyAction, getCharacterAction } from '../../reducers/character';
import moment from 'moment';

import './character.scss';


class Character extends React.Component {
	constructor() {
		super();

		this.state = {
			character: null,
			errors: {},
			isModalOpen: false,
			propertyName: ''
		}
	}

	openPropertyModal() {
		this.setState({ isModalOpen: true });
	}

	closePropertyModal() {
		this.setState({ isModalOpen: false });
	}

	onPropertyChange(propertyName, value) {
		const { character } = this.state;

		this.setState({ character: { ...character, [propertyName]: value }});
	}

	addProperty() {
		const { actions } = this.props;
		const { propertyName } = this.state;

		if (propertyName.length > 0) {
			actions.addPropertyAction(propertyName);

			this.setState({ propertyName: '', isModalOpen: false });
		}
	}

	newPropertyNameChanged(propertyName) {
		this.setState({ propertyName });
	}

	validate() {
		const { character } = this.state;
		const { properties } = this.props;

		const errors = properties.reduce((acc, property) => (property.format && !new RegExp(property.format).test(character[property.key] || '')) || (property.type === 'date' && !moment(character[property.key] || '', 'DD/MM/YYYY').isValid()) ? { ...acc, [property.key]: true } : acc, {});
		this.setState({ errors });

		return Object.keys(errors).length === 0;
	}

	onSubmit() {
		const { character } = this.state;
		const { index, actions } = this.props;

		if (!this.validate()) return;

		if (index >= 0) {
			actions.updateCharacterAction(character, index);
		} else {
			actions.addCharacterAction(character);
		}

		browserHistory.push('/');
	}

	componentWillMount() {
		const { character } = this.props;

		this.setState({ character: character ? { ...character } : { type: 'human' } });
	}

	componentWillUnmount() {
		const { actions } = this.props;

		actions.getCharacterAction(-1);
	}

	render() {
		const { properties, index } = this.props;
		const { character, errors, propertyName, isModalOpen } = this.state;

		return (
			<div className="character">
				<div className="button" onClick={() => this.openPropertyModal()}>Add an optional property</div>
				<div className="character__properties">
					{properties.map((property, i) => (
						<div key={i} className={`property${errors[property.key] ? ' property--error' : ''}`}>
							<div className="property__label">{property.label}</div>
							<div className="property__input">
								{property.values && property.values.length > 0 ?
									<select value={character[property.key]} onChange={e => this.onPropertyChange(property.key, e.target.value)}>
										{property.values.map((value, j) => <option key={j} value={value}>{value}</option>)}
									</select> : <input type="text" value={character[property.key] || ''} onChange={e => this.onPropertyChange(property.key, e.target.value)}/>
								}
							</div>
						</div>
					))}
				</div>
				{Object.keys(errors).length > 0 && <div className="error">At least one field is invalid</div>}
				<div className="buttons">
					<div className="button" onClick={() => this.onSubmit()}>{index >= 0 ? 'Edit' : 'Add'}</div>
					<div className="button" onClick={() => browserHistory.push('/')}>Back</div>
				</div>
				{isModalOpen && 
				<div className="property__modal" onClick={() => this.closePropertyModal()}>
					<div className="modal__content" onClick={e => e.stopPropagation()}>
						<div className="character__properties">
							<div className="property">
								<div className="property__label">Name</div>
								<div className="property__input"><input type="text" value={propertyName} onChange={e => this.newPropertyNameChanged(e.target.value)} /></div>
							</div>
							<div className="modal__buttons">
								<div className="button" onClick={() => this.addProperty()}>Add</div>
								<div className="button button--red" onClick={() => this.closePropertyModal()}>Cancel</div>
							</div>
						</div>
					</div>
				</div>}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  characters: state.character.characters,
	character: state.character.character,
	index: state.character.index,
  properties: state.character.properties
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ addCharacterAction, updateCharacterAction, addPropertyAction, getCharacterAction }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Character);