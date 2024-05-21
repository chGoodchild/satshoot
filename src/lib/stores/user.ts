import type { NDKUser, Hexpubkey } from '@nostr-dev-kit/ndk';
import { writable } from 'svelte/store';
import { localStorageStore } from "@skeletonlabs/skeleton";
import type { Writable } from 'svelte/store';

import { getSetSerializer, getMapSerializer } from '../utils/misc';

export const BTCTroubleshootPubkey = 'e3244843f8ab6483827e305e5b9d7f61b9eb791aa274d2a36836f3999c767650';

export const loginAlert = writable(true);

export const loggedIn = writable(false);

export const currentUserFollows: Writable<Set<Hexpubkey> | null>
    = localStorageStore('currentUserFollows', null, {serializer: getSetSerializer()});

export const networkFollows: Writable<Map<Hexpubkey, number> | null>
    = localStorageStore('networkFollows', null, {serializer: getMapSerializer()});

// Minimum wot percentile to be included in any result
export let minWot = 0;
export const firstOrderFollowWot = 4;
export const secondOrderFollowWot = 1;
export const bootstrapAccount = BTCTroubleshootPubkey;

export const wotUpdated = writable(false);
export const followsUpdated: Writable<number> = localStorageStore('followsUpdated', 0);

const currentUser = writable<NDKUser|null>(null);

export default currentUser;