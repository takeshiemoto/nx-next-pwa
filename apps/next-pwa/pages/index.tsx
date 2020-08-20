import React from 'react';
import styled from 'styled-components';
import { ReactComponent as NxLogo } from '../public/nx-logo-white.svg';
import Head from 'next/head';

const StyledApp = styled.div`
  font-family: sans-serif;
  min-width: 300px;
  max-width: 600px;
  margin: 50px auto;

  .gutter-left {
    margin-left: 9px;
  }

  .col-span-2 {
    grid-column: span 2;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  header {
    background-color: #143055;
    color: white;
    padding: 5px;
    border-radius: 3px;
  }

  main {
    padding: 0 36px;
  }

  p {
    text-align: center;
  }

  h1 {
    text-align: center;
    margin-left: 18px;
    font-size: 24px;
  }

  h2 {
    text-align: center;
    font-size: 20px;
    margin: 40px 0 10px 0;
  }

  .resources {
    text-align: center;
    list-style: none;
    padding: 0;
    display: grid;
    grid-gap: 9px;
    grid-template-columns: 1fr 1fr;
  }

  .resource {
    color: #0094ba;
    height: 36px;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    padding: 3px 9px;
    text-decoration: none;
  }

  .resource:hover {
    background-color: rgba(68, 138, 255, 0.04);
  }

  pre {
    padding: 9px;
    border-radius: 4px;
    background-color: black;
    color: #eee;
  }

  details {
    border-radius: 4px;
    color: #333;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid rgba(0, 0, 0, 0.12);
    padding: 3px 9px;
    margin-bottom: 9px;
  }

  summary {
    outline: none;
    height: 36px;
    line-height: 36px;
  }

  .github-star-container {
    margin-top: 12px;
    line-height: 20px;
  }

  .github-star-container a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }

  .github-star-badge {
    color: #24292e;
    display: flex;
    align-items: center;
    font-size: 12px;
    padding: 3px 10px;
    border: 1px solid rgba(27, 31, 35, 0.2);
    border-radius: 3px;
    background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
    margin-left: 4px;
    font-weight: 600;
  }

  .github-star-badge:hover {
    background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);
    border-color: rgba(27, 31, 35, 0.35);
    background-position: -0.5em;
  }
  .github-star-badge .material-icons {
    height: 16px;
    width: 16px;
    margin-right: 4px;
  }
`;

export const Index = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./${fileName}.${style} file.
   */
  return (
    <StyledApp>
      <Head>
        <meta charSet='utf-8'/>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
        <meta name='viewport'
              content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'/>
        <meta name='description' content='Description'/>
        <meta name='keywords' content='Keywords'/>
        <title>Next.js PWA Example</title>

        <link rel='manifest' href='/manifest.json'/>
        <link href='/icons/icon-36x36.png' rel='icon' type='image/png' sizes='36x26'/>
        <link href='/icons/icon-36x36.png' rel='icon' type='image/png' sizes='36x36'/>
        <link rel='apple-touch-icon' href='/apple-icon.png'></link>
        <meta name='theme-color' content='#317EFB'/>
      </Head>
      <header className="flex">
        <NxLogo alt="" width="75" height="50" />
        <h1>Welcome to next-pwa!</h1>
      </header>
      <main>
        <h2>Resources &amp; Tools</h2>
        <p>Thank you for using and showing some ♥ for Nx.</p>
        <div className="flex github-star-container">
          <a
            href="https://github.com/nrwl/nx"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            If you like Nx, please give it a star:
            <div className="github-star-badge">
              <img src="/star.svg" className="material-icons" alt="" />
              Star
            </div>
          </a>
        </div>
        <p>Here are some links to help you get started.</p>
        <ul className="resources">
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://connect.nrwl.io/app/courses/nx-workspaces/intro"
            >
              Nx video course
            </a>
          </li>
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://nx.dev/react/getting-started/what-is-nx"
            >
              Nx video tutorial
            </a>
          </li>
          <li className="col-span-2">
            <a
              className="resource flex"
              href="https://nx.dev/react/tutorial/01-create-application"
            >
              Interactive tutorial
            </a>
          </li>
          <li className="col-span-2">
            <a className="resource flex" href="https://connect.nrwl.io/">
              <img
                height="36"
                alt="Nrwl Connect"
                src="https://connect.nrwl.io/assets/img/CONNECT_ColorIcon.png"
              />
              <span className="gutter-left">Nrwl Connect</span>
            </a>
          </li>
        </ul>
        <h2>Next Steps</h2>
        <p>Here are some things you can do with Nx.</p>
        <details open>
          <summary>Add UI library</summary>
          <pre>{`# Generate UI lib
nx g @nrwl/react:lib ui

# Add a component
nx g @nrwl/react:component xyz --project ui`}</pre>
        </details>
        <details>
          <summary>View dependency graph</summary>
          <pre>{`nx dep-graph`}</pre>
        </details>
        <details>
          <summary>Run affected commands</summary>
          <pre>{`# see what's been affected by changes
nx affected:dep-graph

# run tests for current changes
nx affected:test

# run e2e tests for current changes
nx affected:e2e
`}</pre>
        </details>
      </main>
    </StyledApp>
  );
};

export default Index;
