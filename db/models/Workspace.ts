// @generated
// This file is automatically generated by Kanel. Do not modify manually.

import { userId, type UserId } from './User';
import { z } from 'zod';

/** Identifier type for public.workspace */
export type WorkspaceId = string & { __brand: 'WorkspaceId' };

/** Represents the table public.workspace */
export default interface Workspace {
  id: WorkspaceId;

  owner_id: UserId;

  name: string;

  created_at: Date;

  updated_at: Date;
}

/** Represents the initializer for the table public.workspace */
export interface WorkspaceInitializer {
  id: WorkspaceId;

  owner_id: UserId;

  name: string;

  /** Default value: CURRENT_TIMESTAMP */
  created_at?: Date;

  /** Default value: CURRENT_TIMESTAMP */
  updated_at?: Date;
}

/** Represents the mutator for the table public.workspace */
export interface WorkspaceMutator {
  id?: WorkspaceId;

  owner_id?: UserId;

  name?: string;

  created_at?: Date;

  updated_at?: Date;
}

export const workspaceId = z.string() as unknown as z.Schema<WorkspaceId>;

export const workspace = z.object({
  id: workspaceId,
  owner_id: userId,
  name: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
}) as unknown as z.Schema<Workspace>;

export const workspaceInitializer = z.object({
  id: workspaceId,
  owner_id: userId,
  name: z.string(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}) as unknown as z.Schema<WorkspaceInitializer>;

export const workspaceMutator = z.object({
  id: workspaceId.optional(),
  owner_id: userId.optional(),
  name: z.string().optional(),
  created_at: z.date().optional(),
  updated_at: z.date().optional(),
}) as unknown as z.Schema<WorkspaceMutator>;
