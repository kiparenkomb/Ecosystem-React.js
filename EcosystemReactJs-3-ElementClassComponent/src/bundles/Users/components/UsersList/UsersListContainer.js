import React from 'react';
import UsersList from './UsersList';

const mockData = [
	{
		"login": "simonjefford",
		"id": 1,
		"avatar_url": "https://avatars2.githubusercontent.com/u/136?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/simonjefford",
		"html_url": "https://github.com/simonjefford",
		"followers_url": "https://api.github.com/users/simonjefford/followers",
		"following_url": "https://api.github.com/users/simonjefford/following{/other_user}",
		"gists_url": "https://api.github.com/users/simonjefford/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/simonjefford/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/simonjefford/subscriptions",
		"organizations_url": "https://api.github.com/users/simonjefford/orgs",
		"repos_url": "https://api.github.com/users/simonjefford/repos",
		"events_url": "https://api.github.com/users/simonjefford/events{/privacy}",
		"received_events_url": "https://api.github.com/users/simonjefford/received_events",
		"type": "User",
		"site_admin": false
	},
	{
		"login": "josh",
		"id": 2,
		"avatar_url": "https://avatars2.githubusercontent.com/u/137?v=4",
		"gravatar_id": "",
		"url": "https://api.github.com/users/josh",
		"html_url": "https://github.com/josh",
		"followers_url": "https://api.github.com/users/josh/followers",
		"following_url": "https://api.github.com/users/josh/following{/other_user}",
		"gists_url": "https://api.github.com/users/josh/gists{/gist_id}",
		"starred_url": "https://api.github.com/users/josh/starred{/owner}{/repo}",
		"subscriptions_url": "https://api.github.com/users/josh/subscriptions",
		"organizations_url": "https://api.github.com/users/josh/orgs",
		"repos_url": "https://api.github.com/users/josh/repos",
		"events_url": "https://api.github.com/users/josh/events{/privacy}",
		"received_events_url": "https://api.github.com/users/josh/received_events",
		"type": "User",
		"site_admin": true
	}
]

export default UsersList;
// export default <UsersList users=(mockData) />;
