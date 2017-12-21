const url = require('url');

exports.getAll = async ctx => {
  try {
    let repo = await ctx.get('/orgs/facebook/repos', null, {
      'User-Agent': 'koa-http-request'
    });
    if (!repo) {
      return ctx.response.status = 400
    }
    const allRepos = repo.map(item => item.name)
    ctx.body = {
      repositories: allRepos
    }
  } catch (err) {
    console.error(err)
  }
}

exports.getCommits = async ctx => {
  const pathname = url.parse(ctx.request.url).pathname;
  const params = pathname.split('/');
  const owner = 'facebook'
  const repo = params[3];
  // try {
  //   let commits = await ctx.get(`/repos/${owner}/${repo}/commits`, null, {
  //     'User-Agent': 'koa-http-request'
  //   });
  //   if (!commits) {
  //     return ctx.response.status = 400
  //   }
  //   const lastCommits = commits.splice(0, 100)
  //   ctx.body = lastCommits
  // } catch (err) {
  //   console.error(err)
  // }
  try {
    let commits = await ctx.get(`/search/commits?q=repo:fecebook/react&page=1&per_page=1`, null, {
      'User-Agent': 'koa-http-request',
      'Accept': 'application/vnd.github.cloak-preview'
    });
    if (!commits) {
      return ctx.response.status = 400
    }
    // const lastCommits = commits.splice(0, 100)
    ctx.body = commits
  } catch (err) {
    console.error(err)
  }
}