import { SET_AGENT, CREATE_AGENT, CREATE_STORE, SET_AGENTS } from "../constants";

const initialState = {
  agent: {},
  agents: [],
  newAgent: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AGENT:
      return { ...state, agent: action.agent };
      case SET_AGENTS:
      return { ...state, agents: action.agents };
    case CREATE_AGENT:
      return { ...state, newAgent: action.newAgent };
    default:
      return state;
  }
};
