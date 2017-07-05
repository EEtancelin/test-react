export const GET_CHARACTER = 'GET_CHARACTER';
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const UPDATE_CHARACTER = 'UPDATE_CHARACTER';
export const DELETE_CHARACTER = 'DELETE_CHARACTER';
export const ADD_PROPERTY = 'ADD_PROPERTY';

const initialState = {
  characters: [
    {
      lastName: 'Akita',
      firstName: 'Nexus',
      type: 'animal',
      birthDate: '21/11/2015'
    }
  ],
  properties: [
    { key:'lastName', label: "Last name", format: /\S+/, required: true },
    { key: 'firstName', label: "First name", format: /\S+/, required: true },
    { key: 'type', label: 'Type', values: ["human", "animal", "plant"], format: /(human|plant|animal)/, required: true },
    { key: 'birthDate', label: 'Birth date (dd/mm/yyyy)', format: /\d{2}\/\d{2}\/\d{4}/, type: 'date', required: true }
  ],
  characher: null,
  index: -1
};

export default function characterReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CHARACTER:
      console.log(action);
      console.log(state);
      return {
        ...state,
        character: state.characters[action.index],
        index: action.index
      };
    case ADD_CHARACTER:
      return {
        ...state,
        characters: [ ...state.characters, action.character ]
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        characters: state.characters.reduce((acc, character, index) => index == action.index ? acc : [ ...acc, character ], [])
      };
    case UPDATE_CHARACTER:
      return {
        ...state,
        characters: state.characters.map((character, index) => index == action.index ? action.character : character)
      }
    case ADD_PROPERTY:
      return {
        ...state,
        properties: [ ...state.properties, { key: action.property, label: action.property } ]
      };
    default:
      return state;
  }
}

export const getCharacterAction = index => dispatch => dispatch({ type: GET_CHARACTER, index });
export const addCharacterAction = character => dispatch => dispatch({ type: ADD_CHARACTER, character });
export const updateCharacterAction = (character, index) => dispatch => dispatch({ type: UPDATE_CHARACTER, character, index });
export const deleteCharacterAction = index => dispatch => dispatch({ type: DELETE_CHARACTER, index });
export const addPropertyAction = property => dispatch => dispatch({ type: ADD_PROPERTY, property });
