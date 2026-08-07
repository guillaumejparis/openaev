import { schema } from 'normalizr';
const test = "test";
export const agent = new schema.Entity(
  'agents',
  {},
  { idAttribute: 'agent_id' },
);
export const arrayOfAgents = new schema.Array(agent);
