export type ProjectTaskType =
  | 'produce-resource'
  | 'factory-storage-centre'
  | 'maintain-factory-connection'
  | 'mega-logistic-centre'
  | 'connect-logistic-centres'
  | 'cannon'
  | 'transport-pipes';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export type MegaLogisticMode = 'train' | 'drone' | 'both';

export interface TaskClaim {
  player: string;
  claimed_at: number;
}

export interface ProjectSubtask {
  id: string;
  title: string;
  completed: boolean;
  claims: TaskClaim[];
  completed_at?: number;
}

export interface ProjectTask {
  id: string;
  type: ProjectTaskType;
  title: string;
  configuration: {
    resource?: string;
    logistics_mode?: MegaLogisticMode;
  };
  subtasks: ProjectSubtask[];
  created_at: number;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  created_at: number;
  updated_at: number;
  tasks: ProjectTask[];
}

export interface ProjectSummary {
  id: string;
  name: string;
  description: string;
  task_count: number;
  completed_tasks: number;
  active_claims: number;
  active_players: string[];
  progress: number;
  updated_at: number;
}

export interface ProjectTaskDefinition {
  type: ProjectTaskType;
  title: string;
  configurable?: boolean;
  configuration?: {
    resource?: boolean;
    logistics_mode?: boolean;
  };
  subtasks: string[];
}




export const TASK_DEFINITIONS: Record<ProjectTaskType, ProjectTaskDefinition> = {
    'produce-resource': {
      type: 'produce-resource',
      title: 'Produce Resource',
      configurable: true,
      configuration: {
        resource: true,
      },
      subtasks: [
        'Build floor + Walls',
        'Build production machines',
        'Input-output management',
        'Conveyor belts within',
        'Set up Electricity',
        'Make it Pretty',
      ],
    },
  
    'factory-storage-centre': {
      type: 'factory-storage-centre',
      title: 'Build Factory Storage Centre',
      subtasks: [
        'Storage Units',
        'Walls+Floor',
        'Overflow grinder',
        'Forward to Mega-Logistic Centre',
        'Make it Pretty',
      ],
    },
  
    'maintain-factory-connection': {
      type: 'maintain-factory-connection',
      title: 'Maintain Factory Connection',
      subtasks: [
        'Conveyor belts',
        'Build truckstations',
      ],
    },
  
    'mega-logistic-centre': {
      type: 'mega-logistic-centre',
      title: 'Build Mega-Logistic Centre',
      configurable: true,
      configuration: {
        logistics_mode: true,
      },
      subtasks: [
        'Floor+Walls',
        'Trainstation/DronePort',
        'Conveyor belts',
        'Fuel/Electricity',
        'Make it pretty',
      ],
    },
  
    'connect-logistic-centres': {
      type: 'connect-logistic-centres',
      title: 'Connect Logistic Centres',
      subtasks: [
        'Build train-road / verify drone connections',
      ],
    },
  
    cannon: {
      type: 'cannon',
      title: 'Build Cannon',
      subtasks: [
        'Pick a nice spot',
        'Build the cannon',
      ],
    },
  
    'transport-pipes': {
      type: 'transport-pipes',
      title: 'Build transport pipes',
      subtasks: [
        'Set travel pipes',
        'Set up travel centre',
        'Electricity',
        'Make it pretty',
      ],
    },
  };
  
  export const TASK_TYPES = Object.values(TASK_DEFINITIONS);