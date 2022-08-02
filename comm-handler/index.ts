import { Socket, Server } from 'socket.io';
import { IHandler } from '../comm';
import test from './test';

export default {
  rules: {
    ...test.rules,
  },
  handler(socket: Socket, io: Server) {
    test.handler(io, socket);
  },
} as IHandler;
