/**
 * The eventbus is a global pub/sub system. It is useful for your own code, and it also the mechanism that allows your code to communicate with code that others are running on the server.
 * 
 * Use it to publish to a topic, and other players can consume the data by subscribing to the same topic.
 *
 */
declare namespace eventbus {
    export type MessageData = {
        data: string | Object;
        type: string;
    }

    /**
     * Your subscription callback function will receive a single parameter of type `MessageData`.
     */
    export type SubscriptionCallback = (message: MessageData) => void;

    export interface Subscription {
        /**
         * Cancel the subscription. This stops your callback from being triggered when this topic is published.
         * ```
         * const mysub = eventbus.subscribe('sitapati.highscore', (score) => {
         *      if (score === "-1") {
         *          return mysub.cancel(); // Stop listening to this topic.
         *      }
         *      magik.dixit(`High score is ${score`);
         * });
         * ```
         * @memberof Subscription
         */
        cancel(): void;
    }
    /**
     * Subscribe to a topic on the eventbus.
     * Topic names are arbitrary, and the topic namespace is global, so you probably want to namespace your topics, for example by using your username, like: 'sitapati.myTopic'
     * 
     * ```
     * const sub = eventbus.subscribe('sitapati.messages', (msg) => {
     *      if (msg.type === "string") {
     *          magik.dixit(msg.data);
     *      }
     *      if (msg.type === "json") {
     *          magik.dixit(Object.keys(msg.data).toString());
     *      }
     * });
     * ```
     */
    export function subscribe(topic: string, callback: SubscriptionCallback): Subscription;


    /**
     * Publish to a topic. You can publish a string, or a JSON Object.
     * 
     * ```
     * eventbus.publish('sitapati.messages', 'Hope everyone is feeling fabulous today!');
     * 
     * eventbus.publish('sitapati.messages', {data: 'You can also publish JSON objects', moredata: 'The consumer should check the data type in their subscription'});
     * ```
     * 
     */
    export function publish(topic: string, data: string | Object);

    /**
     * To cancel a subscription, you call the `cancel()` method of the subscription object returned from `eventbus.subscribe()`. However, sometimes you lose the reference to that object - or you want to unsubscribe a bunch of listeners all at once.
     * 
     * In this case, you can use `eventbus.unsubscribeFromTopic()`. You specify which topic you want to unsubscribe from, and all your subscriptions to that topic will be cancelled.
     * 
     * This does not unsubscribe anyone else - just your subscriptions.
     * 
     * ```
     * // Subscribe without getting a reference to the subscription
     * eventbus.subscribe('magikcraft.news', news => magik.dixit(news.data));
     * ...
     * // Somewhere else, we don't have a subscription to cancel, but we can cancel all subscriptions to that topic:
     * eventbus.unsubscribeFromTopic('magikcraft.news');
     * ```
     */
    export function unsubscribeFromTopic(topic: string): boolean;
}

declare module "eventbus" {
    export = eventbus;
}