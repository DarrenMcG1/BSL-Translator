export type SignCategory = 'greeting' | 'question' | 'family' | 'colour' | 'number' | 'verb' | 'noun';
export type HandshapeCode = 'B_HAND' | 'FLAT_B' | 'OPEN_HAND';
export type SignLocation = 'neutral_space' | 'chin' | 'chest' | 'forehead';
export type MovementType = 'single_outward' | 'forward_double' | 'circular';

export interface NonManualFeatures {
  mouthPattern: string;
  eyebrows: 'neutral' | 'raised' | 'furrowed';
  headMovement: 'none' | 'nod' | 'shake' | 'tilt';
  eyeGaze: 'forward' | 'up' | 'down' | 'left' | 'right';
}

export interface AnimationKeyframes {
  duration: number;
  frames: KeyframeData[];
}

export interface KeyframeData {
  time: number;
  rightHand?: HandPose;
  leftHand?: HandPose;
  bodyPose?: BodyPose;
  facialExpression?: FacialPose;
}

export interface HandPose {
  position?: [number, number, number];
  rotation?: [number, number, number, number];
  fingerBones?: Record<string, [number, number, number, number]>;
}

export interface BodyPose {
  spine?: [number, number, number, number];
  shoulders?: [number, number, number, number];
}

export interface FacialPose {
  blendshapes?: Record<string, number>;
}

export interface Sign {
  id: string;
  gloss: string;
  englishMeanings: string[];
  category: SignCategory;
  handshape: HandshapeCode;
  location: SignLocation;
  movement: MovementType;
  nfm: NonManualFeatures;
  animationData: AnimationKeyframes;
  videoReference?: string;
  regionalVariants?: string[];
}
