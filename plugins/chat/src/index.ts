import { Context, Schema, Session } from 'koishi';
import { sample as _sample } from 'lodash';
import '@koishijs/plugin-adapter-onebot';

export const name = 'chat';

export interface Config {}

export const Config: Schema<Config> = Schema.object({});

export function apply(ctx: Context) {
  ctx.guild(...['532250819','#']).middleware(async (session: Session, next) => {
    const {
      bot,
      content,
      guildId,
      author: { userId, username },
      onebot,
    } = session;
    const { last_sent_time } = await onebot?.getGroupMemberInfo(guildId, userId);
    console.log('🚀~ 50  ');
    // if () {
    //
    // }
    await next();
  });
}
