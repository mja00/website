import type { Metadata } from "next";

import BYIcon from "@/assets/icons/cc/by.svg";
import CCIcon from "@/assets/icons/cc/cc.svg";
import SAIcon from "@/assets/icons/cc/sa.svg";

export const metadata: Metadata = {
  title: "Community Guidelines",
  description: "Community Guidelines for the PaperMC community.",
  keywords: ["papermc", "paper", "minecraft", "community", "guidelines"],
};

export default function CommunityGuidelinesPage() {
  return (
    <>
      <header className="max-w-7xl mx-auto px-4 pt-32 pb-16">
        <h1 className="font-medium leading-normal lg:text-5xl lg:leading-normal text-4xl">
          PaperMC Community Guidelines
        </h1>
      </header>
      <section id="overview" className="px-4 py-4 max-w-7xl mx-auto leading-7">
        <h2 className="text-2xl font-medium mb-4">Overview</h2>
        <p>
          PaperMC has grown significantly past what it was originally created to be — a small group of tightly-knit
          developers having fun on a side project, never really intending it to go anywhere. With this fact in mind, we
          need to be proactive and explicit about how we intend to combat negativity and toxicity in the PaperMC
          community. We want PaperMC to be a welcoming community to all, where new members feel safe to hang out and ask
          questions, and where old members are happy to hang out, chat, and help others too. We want PaperMC to be an
          inclusive environment. PaperMC is, at its core, a development community. We want to continue staying focused
          on being a development community rather than letting toxic behavior take over. This document is the definitive
          list of guidelines everyone in the community must follow to participate in this community.
        </p>
      </section>
      <section id="the-paper-community" className="px-4 py-4 max-w-7xl mx-auto leading-7">
        <h2 className="text-2xl font-medium mb-4">The PaperMC Community</h2>
        <p>
          This document uses the phrase &quot;PaperMC community&quot; to refer to all communication which happens within
          the PaperMC ecosystem. This includes every forum of communication that is officially part of the PaperMC
          project. To be abundantly clear, these PaperMC Community Guidelines apply to all of the following:
        </p>
        <ul className="list-disc list-inside my-4">
          <li>The PaperMC Discord server</li>
          <li>The PaperMC IRC channels</li>
          <li>The PaperMC forums</li>
          <li>The PaperMC GitHub organization</li>
          <li>This includes issues, pull requests, and any discussion inside issues or pull requests</li>
        </ul>
      </section>
      <section id="guidelines" className="px-4 py-4 max-w-7xl mx-auto leading-7 ">
        <h2 className="text-2xl font-medium mb-4">Guidelines</h2>
        <p>PaperMC has a fairly short and sweet set of rules. It generally comes down to:</p>
        <ol className="list-decimal list-inside my-4 ml-4">
          <li>Don&apos;t be a jerk</li>
          <li>Listen to project staff</li>
        </ol>
        <p>
          We do this because creating an exhaustive list for all negative behavior we want to avoid is impossible and
          likely won&apos;t help anyways. The kinds of people who would engage in such a way in the first place probably
          aren&apos;t the people we want around at all.
          <br />
          <br />
          However, there are specific behaviors we want to avoid in our community. The following behaviors are not
          permitted in the PaperMC community:
        </p>
        <ol className="list-decimal list-inside my-4 ml-4 space-y-2 py-1">
          <li>
            Using language or posting content that can reasonably be considered discriminatory.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>
                Most of the language banned here should be obvious, but will be listed in more detail below in{" "}
                <a href="#zero-tolerance-items" className="text-blue-800 dark:text-blue-300">
                  Zero Tolerance Items.
                </a>
              </li>
            </ol>
          </li>
          <li>
            Posting pornographic, distasteful, or excessively violent content.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>This is similar to the first rule.</li>
            </ol>
          </li>
          <li>
            Spamming or excessively sending messages, including repeating questions, resending links too frequently, or
            posting the same question to multiple channels.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>Spam bots and trolling users will be immediately banned without warning.</li>
              <li>
                Incessantly repeating questions because they&apos;re not being answered isn&apos;t allowed. Please be
                patient in waiting for a reply.
                <ol className="list-[lower-roman] list-inside ml-6 space-y-2 py-1">
                  <li>
                    Repeating a question after some time has passed because the question is no longer current and the
                    conversation has changed is fine, as long as it&apos;s not too repetitive.
                  </li>
                  <li>Repeating a question because the answer given isn&apos;t satisfying is not fine.</li>
                </ol>
              </li>
            </ol>
          </li>
          <li>Trying to buy or sell services or hire developers. This is not a marketplace.</li>
          <li>
            Formatting usernames to be difficult to read, to impersonate others, to advertise, or to be inappropriate.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>
                Non-hateful and non-bigoted cursing is fine for the most part, but not in usernames. Constant cursing in
                every message isn&apos;t allowed. Usernames containing curse words are basically the same as saying that
                word every time a message is sent, so it&apos;s the same problem.
              </li>
              <li>
                Impersonating people includes anyone in or out of the server, not just staff and not just those in
                Paper.
              </li>
              <li>
                Putting servers or plugins in usernames isn&apos;t allowed. However, this is allowed in less visible
                fields, such as a Discord status.
              </li>
              <li>
                Usernames that are nothing but a bunch of symbols that are impossible to pronounce aren&apos;t very
                conducive of a good conversation environment. However, this does not apply to usernames in different
                languages and alphabets. There is a difference between having a username in Japanese and having only
                random symbols as your username.
              </li>
            </ol>
          </li>
          <li>
            Pinging server staff, moderators, or contributors without a valid reason.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>
                For reporting dupe glitches or critical bugs, please make use of the &quot;paper-exploit-report&quot;
                channel on Discord. This notifies the developers and keeps the issue confidential. This channel
                isn&apos;t for regular support.
              </li>
              <li>
                Someone pinging a particular person because they are responding to that person isn&apos;t a problem.
                Someone pinging a project developer or contributor just because they want an answer is what is addressed
                here.
              </li>
              <li>There are some users who don&apos;t want to be pinged, so please respect their decision.</li>
            </ol>
          </li>
          <li>
            Discussing politics or political controversy. We prohibit this in order to prevent the degeneration of our
            chat channels.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>
                This does not apply to speaking about everyday lives or current events - only when discussion devolves
                to the point of being solely about some political scandal or controversy.
              </li>
            </ol>
          </li>
          <li>
            Discussing piracy or pirated software. This explicitly applies to &quot;offline-mode&quot; (not
            authenticating users against their Microsoft accounts) as well.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>
                This does not apply to legitimate uses of offline mode, like with certain proxies, as long as the users
                get authenticated with Microsoft another way.
              </li>
            </ol>
          </li>
          <li>
            Discussing the bypassing or exploiting of Minecraft&apos;s player safety features in any way that is
            malicious or harmful. This applies to discussion around how to bypass chat, username, and skin reporting
            specifically, as well as any other features that make Minecraft a safer place for its users.
            <ol className="list-alpha list-inside ml-6 space-y-2 py-1">
              <li>
                This does not apply to general discussion of the safety features themselves, nor does it apply to
                discussion of these features&apos; potential downsides. Further we will not forbid general discussion of
                &apos;proper&apos; ways to disable safety features for legitimate reasons. Only trying to bypass them
                for the sake of avoiding accountability or otherwise being malicious isn&apos;t allowed.
              </li>
            </ol>
          </li>
        </ol>
        <p>
          If someone is violating those feel free to use the <code>@mods</code> ping on Discord to notify the moderation
          team. You can also contact the team privately using the <code>/modmail</code> command, however this does not
          alert us in the same way that the <code>@mods</code> ping does, so don&apos;t use it for time sensitive
          issues.
        </p>
      </section>
      <section id="zero-tolerance-items" className="px-4 py-4 max-w-7xl mx-auto leading-7">
        <h2 className="text-2xl font-medium mb-4">Zero Tolerance Items</h2>
        <p>
          Particularly severe issues represent a behavior and a kind of person we don&apos;t want associated with
          PaperMC in any way. These behaviors will result in an immediate ban without warning:
        </p>
        <ul className="list-disc list-inside my-4 ml-4">
          <li>Racial slurs or racist speech</li>
          <li>Sexist slurs or sexist speech</li>
          <li>Homophobic or transphobic slurs or speech</li>
          <li>
            Ableist slurs or speech &mdash; there&apos;s confusion around this term, so to help clarify:
            <ul className="list-disc list-inside ml-6 py-1">
              <li>Ableist slurs are words that refer to people with disabilities used as insults</li>
              <li>Ableist speech is hate speech directed towards people with disabilities</li>
            </ul>
          </li>
          <li>Any other hate speech not already listed</li>
          <li>Doxxing people</li>
          <li>Personal attacks</li>
        </ul>
        <p>
          This list is not exhaustive. If someone is engaging in bad behavior not conducive to a friendly environment,
          and we believe it warrants an immediate ban, then we will do so.
          <br />
          <br />
          When someone is removed for violating one of these items, all messages in question will be removed as well and
          reported to Discord if necessary.
        </p>
      </section>
      <section id="topic-specific-channels-in-discord" className="px-4 py-4 max-w-7xl mx-auto leading-7 ">
        <h2 className="text-2xl font-medium mb-4">Topic Specific Channels on Discord</h2>
        <p>
          PaperMC has channels dedicated to specific topics, and conversations in these channels should stay on-topic.
          This can help newer members in particular to feel more comfortable asking questions in the help channels if
          other members aren&apos;t also talking over them about other, unrelated topics.
        </p>
        <p>
          Moderators will shut down any off-topic discussions happening in any of the following channels and ask for the
          conversation to be moved to <code>#general</code> instead:
        </p>
        <ul className="list-disc list-inside my-4 ml-4">
          <li>
            <code>#paper-help</code>
          </li>
          <li>
            <code>#paper-dev</code>
          </li>
          <li>
            <code>#folia-help</code>
          </li>
          <li>
            <code>#folia-dev</code>
          </li>
          <li>
            <code>#velocity-help</code>
          </li>
          <li>
            <code>#velocity-dev</code>
          </li>
          <li>
            <code>#adventure-help</code>
          </li>
          <li>
            <code>#adventure-platform-help</code>
          </li>
          <li>
            <code>#adventure-contrib</code>
          </li>
          <li>
            <code>#hangar-help</code>
          </li>
          <li>
            <code>#hangar-contrib</code>
          </li>
        </ul>
      </section>
      <section id="support-channels" className="px-4 py-4 max-w-7xl mx-auto leading-7 ">
        <h2 className="text-2xl font-medium mb-4">Support Channels</h2>
        <p>
          Our support channels <code>#paper-help</code>, <code>#folia-help</code>, <code>#velocity-help</code>,{" "}
          <code>#adventure-help</code>, <code>#adventure-platform-help</code>, and <code>#hangar-help</code> are there
          for people who need support using our software. While we are very happy that so many members of the community
          actively support there and answer questions, please make sure to follow our guidelines there as well. Many
          people that go there to ask questions are new to Minecraft servers and to the community itself. We should be
          welcoming towards newcomers, especially since we all started somewhere. In general, &quot;Rule 1: Don&apos;t
          be a jerk&quot; applies here as well, but we would like to add the following points:
        </p>
        <ol className="list-decimal list-inside my-4 ml-4 space-y-2">
          <li>
            Please don&apos;t harass people for using software/plugins that you don&apos;t like. We know that some
            plugins are not that well received in this community, but as long as they are not causing the issue itself,
            you shouldn&apos;t harass people for using them. This doesn&apos;t mean that you can&apos;t recommend a
            replacement. Again, as stated in rule 1, if you don&apos;t like if someone is using a specific software, you
            can always choose to just ignore the question and let someone else answer.
          </li>
          <li>
            Please be polite even when turning down help. PaperMC does not officially support older versions of our
            software, and that is not likely to change. We generally discourage people from using our older software,
            and we stipulate that it comes with no support. This does not mean users asking for support for older
            versions should be mocked or yelled at, however.
          </li>
        </ol>
      </section>
      <section id="ban-appeal" className="px-4 py-4 max-w-7xl mx-auto leading-7">
        <h2 className="text-2xl font-medium mb-4">Ban Appeal</h2>
        <p>
          If you have been banned on our Discord server, we offer a way to appeal that ban. To do that, simply join{" "}
          <a
            className="text-blue-800 dark:text-blue-300"
            href="https://discord.gg/cTKAXWy5eP"
            rel="noreferrer"
            target="_blank"
          >
            this server{" "}
          </a>
          to start the appeal process. Please make sure to follow the instructions. You only get one chance to appeal a
          ban.
        </p>
      </section>
      <section id="last-updated" className="px-4 py-4 max-w-7xl mx-auto leading-7">
        <h2 className="text-2xl font-medium mb-4">
          Last Updated <code>2025-03-31</code>
        </h2>
        <p>
          This document is licensed under{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1"
            target="_blank"
            rel="noreferrer"
            className="text-blue-800 dark:text-blue-300 inline-flex items-center"
          >
            CC BY-SA 4.0
            <CCIcon className="ml-2 w-6 h-6" />
            <BYIcon className="w-6 h-6" />
            <SAIcon className="w-6 h-6" />
          </a>
        </p>
      </section>
    </>
  );
}
