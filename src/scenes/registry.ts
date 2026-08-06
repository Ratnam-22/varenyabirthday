import React from 'react';
import { SceneId } from '@/types/scene';
import { InvitationScene3D } from './invitation';
import GiftScene from './gift';
import MagicalWorldScene from './magical-world';
import WishingTreeScene from './wishing-tree';
import BirthdayScene from './birthday';
import LetterScene from './letter';
import FinaleScene from './finale';

export const sceneRegistry: Record<SceneId, React.ComponentType> = {
  invitation: InvitationScene3D,
  gift: GiftScene,
  'magical-world': MagicalWorldScene,
  'wishing-tree': WishingTreeScene,
  birthday: BirthdayScene,
  letter: LetterScene,
  finale: FinaleScene,
};
