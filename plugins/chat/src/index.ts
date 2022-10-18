import {Context, Schema, segment, Session} from 'koishi';
import {pullAllWith as _pullAllWith, range as _range, sample as _sample} from 'lodash';
import '@koishijs/plugin-adapter-onebot';
import fs from "fs";
import {FFCreatorCenter} from "ffcreator";

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
    // const { last_sent_time } = await onebot?.getGroupMemberInfo(guildId, userId);

    await next();
  });

  ctx
    .command("test")
    .action(async ({ options, session }) => {
      const rst = fs.readFileSync('/Users/tong/Desktop/koishi@/koishi-test/plugins/filmmaker/output/i1egqgfd99n7hte9.mp4');
      console.log('🚀~ 23  rst', rst)
      await session.send(segment.video(rst));
    })
}
