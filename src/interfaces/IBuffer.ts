import { BufferEnum } from "@/enum";

export interface IBuffer {
  cache: string[];
  added: string[];
  removed: string[];
}

export interface IBufferState extends Record<BufferEnum, IBuffer> {}
