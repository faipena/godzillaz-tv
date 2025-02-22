import Main, { MainStage } from "../islands/Main.tsx";
import LogoWidget from "../islands/LogoWidget.tsx";
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
// import UsersTable from "../db/schema/users.ts";
import { DatabaseState } from "./_middleware.ts";
import { useSignal } from "@preact/signals";
import state from "../state.ts";

export const handler: Handlers<Data, DatabaseState> = {
  GET(_req: Request, ctx: FreshContext<DatabaseState>) {
    // const user = await UsersTable.find(ctx, "google@google.com");
    // console.log(user);
    const videoId = "yhzRK7a6vqo";
    return ctx.render({ videoId });
  },
};

interface Data {
  videoId: string;
}

export default function Home({ data }: PageProps<Data>) {
  const videoId = useSignal(data.videoId);
  const formStatus = useSignal(MainStage.Video);
  const prankEnabled = useSignal(state.sendPrankEnabled);
  return (
    <>
      <div class="min-h-screen flex flex-col items-center p-8">
        <LogoWidget></LogoWidget>
        <Main videoId={videoId} stage={formStatus} prankEnabled={prankEnabled}></Main>
      </div>
    </>
  );
}
