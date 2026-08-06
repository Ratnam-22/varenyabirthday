export type ExperienceState =
  | 'Idle'
  | 'Loading'
  | 'Transitioning'
  | 'Interacting'
  | 'Paused'
  | 'Celebrating'
  | 'Completed';

export class ExperienceStateMachine {
  private static instance: ExperienceStateMachine;
  public currentState: ExperienceState = 'Idle';

  private constructor() {}

  public static getInstance(): ExperienceStateMachine {
    if (!ExperienceStateMachine.instance) {
      ExperienceStateMachine.instance = new ExperienceStateMachine();
    }
    return ExperienceStateMachine.instance;
  }

  public setState(nextState: ExperienceState): void {
    this.currentState = nextState;
  }
}

export const experienceStateMachine = ExperienceStateMachine.getInstance();
