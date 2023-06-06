"use client"
import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const DECREMENT_COUNT = 'decrement'
const ADD_VALUE_TO_COINT  ='add_value_to_count'

const reducer:(state: any, action: any) => any = (state, action) => {
  switch (action.type){
    case INCREMENT_COUNT:
      return{
        ...state,
        count: state.count + 1,
      };
    case SET_VALUE_TO_ADD:
      return{
        ...state,
        valueToAdd: action.payload,
      };
    case DECREMENT_COUNT:
      return{
        ...state,
        count: state.count - 1,
      };
    case ADD_VALUE_TO_COINT:
      return{
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      };
    default:
      return state;
  }
};

export default function Home() {
  const initialCount = 5;

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });
 
  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
    });
  };

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
    });
  };

  const handleChange = (event: { target: { value: string; }; }) => {
    const value = parseInt(event.target.value) || 0;
    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value,
    });
  };
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COINT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {state.count}</h1>
      <div className="flex flex-row">
        <Button secondary onClick={increment}>Increment</Button>
        <Button success onClick={decrement}>Decrement</Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border text-black border-gray-300"
        />
        <Button secondary >Add it!</Button>
      </form>
    </Panel>
  );
}
