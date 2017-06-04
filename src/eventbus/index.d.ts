/**
 * The eventbus is a global pub/sub system. It is useful for your own code, and it also the mechanism that allows your code to communicate with code that others are running on the server.
 * 
 * Use it to publish to a topic, and other players can consume the data by subscribing to the same topic.
 *
 */
declare namespace eventbus {
    export interface MessageData {
        data: string | Object;
        type: string;
    }

    export type SubscriptionCallback = (msg: MessageData) => void;

    export interface Subscription {
        /**
         * Cancel the subscription. This stops your callback from being triggered when this topic is published.
         * @example const mysub = eventbus.subscribe('sitapati.highscore', (score) => {
         *      if (score === "-1") {
         *          return mysub.cancel();
         *      }
         *      magik.dixit(`High score is ${score`);
         * });
         * @memberof Subscription
         */
        cancel(): void;
    }
    /**
     * Subscribe to a topic on the eventbus.
     * Topic names are arbitrary, and the topic namespace is global, so you probably want to namespace your topics, for example by using your username, like: 'sitapati.myTopic'
     * 
     * @example const sub = eventbus.subscribe('sitapati.messages', (msg) => {
     *      if (typeof msg === "string") {
     *          magik.dixit(msg);
     *      }
     *      if (typeof msg === "Object") {
     *          magik.dixit(Object.keys(msg).toString());
     *      }
     * });
     * @param {string} topic 
     * @param {SubscriptionCallback} callback 
     */
    export function subscribe(topic: string, callback: SubscriptionCallback): Subscription;


    /**
     * 
     * @example eventbus.publish('sitapati.messages', 'Hope everyone is feeling fabulous today!');
     * eventbus.publish('sitapati.messages', {data: 'You can also publish JSON objects', moredata: 'The consumer should check the data type in their subscription'});
     * 
     */
    export function publish(topic: string, data: string | Object);
}

declare module "eventbus" {
    export = eventbus;
}