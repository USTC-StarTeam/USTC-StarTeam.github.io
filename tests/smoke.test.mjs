import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';

const read = (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8');

test('homepage ships the required static files and core identity', async () => {
  const [html, css, js] = await Promise.all([
    read('index.html'),
    read('styles.css'),
    read('script.js')
  ]);

  assert.match(html, /Star-Team/);
  assert.match(html, /中国科学技术大学|USTC/);
  assert.match(html, /National Key Laboratory of Cognitive Intelligence|认知智能全国重点实验室/);
  assert.match(html, /Wang Hao|王皓/);
  assert.match(html, /陈恩红教授/);
  assert.match(html, /国家杰出青年科学基金获得者/);
  assert.doesNotMatch(html, /硕士生导师/);
  assert.match(html, /https:\/\/github\.com\/USTC-StarTeam/);
  assert.match(css, /@media\s*\(max-width:\s*760px\)/);
  assert.match(js, /const repositories = \[/);
  assert.match(js, /const publications = \[/);
});

test('homepage includes every scraped repository and publication entry', async () => {
  const js = await read('script.js');
  const repoEntries = [...js.matchAll(/name:\s*['"][^'"]+['"],\s*description:/g)];
  const publicationEntries = [...js.matchAll(/title:\s*['"][^'"]+['"],\s*venue:/g)];

  assert.equal(repoEntries.length, 43);
  assert.equal(publicationEntries.length, 55);
  assert.match(js, /DR4SR/);
  assert.match(js, /GE4Rec/);
  assert.match(js, /FuXi-alpha/);
  assert.match(js, /Dataset Regeneration for Sequential Recommendation/);
  assert.match(js, /P-Law: Predicting Quantitative Scaling Law/);
});

test('homepage exposes the expected rendered sections and controls', async () => {
  const html = await read('index.html');

  for (const id of [
    'research',
    'featured',
    'publications',
    'projects',
    'open-source',
    'awards',
    'teaching-service',
    'join'
  ]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }

  for (const id of [
    'publicationList',
    'repoList',
    'projectList',
    'awardList',
    'courseList',
    'serviceList',
    'publicationSearch',
    'repoSearch'
  ]) {
    assert.match(html, new RegExp(`id="${id}"`));
  }
});
