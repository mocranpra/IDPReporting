import './App.css';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <PowerBIEmbed
          embedConfig={{
            type: 'report',   // Supported types: report, dashboard, tile, visual and qna
            id: 'c1f81d6e-b7d8-4c7c-9e85-212fd2aea3e3',
            embedUrl:"https://app.powerbi.com/reportEmbed?reportId=c1f81d6e-b7d8-4c7c-9e85-212fd2aea3e3&groupId=5c6248c7-5f5b-49c8-b410-261495566642&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVdFU1QtRVVST1BFLUItUFJJTUFSWS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsibW9kZXJuRW1iZWQiOnRydWV9fQ%3d%3d",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSIsImtpZCI6IjJaUXBKM1VwYmpBWVhZR2FYRUpsOGxWMFRPSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvYWI1MTgwNTUtZTBmMS00ZDgxLTk5OWMtMjE5ZTQ4OGFhYzg5LyIsImlhdCI6MTY2MTc5ODU3MCwibmJmIjoxNjYxNzk4NTcwLCJleHAiOjE2NjE4MDMzNTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUFFcW5rMFJ3ZGdEV2F3MFVhTmNGa0Y5UU12cmdDbElQVFk2ZW9xODJuVHcyYzFURFl4SnRMY0dvQURBYnFLalBkIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiT2NyYW4iLCJnaXZlbl9uYW1lIjoiTWFyaWUgTG91aXNlIiwiaXBhZGRyIjoiMTk5Ljk2LjI1NC4yNTAiLCJuYW1lIjoiTWFyaWUgTG91aXNlIE9jcmFuIiwib2lkIjoiZTRiZjJlZDctZmFiYi00YzI3LWI1YjktYzlmZThjOTYxYzY2Iiwib25wcmVtX3NpZCI6IlMtMS01LTIxLTYxOTgwNTY4OS0xNDA3NDg5MDQ1LTI0NjU5NjQyNzQtMTg2MTgiLCJwdWlkIjoiMTAwMzIwMDE3QzgwRTAwMiIsInJoIjoiMC5BUnNBVllCUnFfSGdnVTJabkNHZVNJcXNpUWtBQUFBQUFBQUF3QUFBQUFBQUFBQWJBSncuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiQ250eTVwejBNOXJxRk5rS21zVWtXV3RwcmdQdEZUc2tsWUlPRjJRV3pnMCIsInRpZCI6ImFiNTE4MDU1LWUwZjEtNGQ4MS05OTljLTIxOWU0ODhhYWM4OSIsInVuaXF1ZV9uYW1lIjoib2NyYW5tYXJpZWxvdWlzZUBjYXJlaW5ub3ZhdGlvbnMub25taWNyb3NvZnQuY29tIiwidXBuIjoib2NyYW5tYXJpZWxvdWlzZUBjYXJlaW5ub3ZhdGlvbnMub25taWNyb3NvZnQuY29tIiwidXRpIjoiREJoMVJPYlZXMFducE9aaHpMa0NBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il19.ljKyZJXd6T-HZKXH4RaYkubOPUyL_4yTctLlOLLiXG8hLEaRfWzF_sQjZDEAsUUnq967wm1L7Nz-hbHqIdx7qkkJU8A0Iq-C7fHOFRdXvmW-CEep0GJTYtsQ0ZaoAOdM8eYR2kAVjZ-IjpXGoIH--fBWv9c4gss5tXNinyV1XUnWXnwBM1XBZTgz262eQu0gkGNNLS22KqJFWzg8y_9eaQppXK-18V9Ii4ou1s53VLoNqTxMyUOziN0YRDcwg43fLQw7rSQw2GkSb1KibzAoxJoNMYr0cY3qZRg9KrpcIorDK6u0g4CkKH3Gi7EbC4_6wWub2sxZFfUEsGwOlcZ3Qw',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: false
                }
              },
            }
          }}

          eventHandlers={
            new Map([
              ['loaded', function () { console.log('Report loaded'); }],
              ['rendered', function () { console.log('Report rendered'); }],
              ['error', function (event) { console.log(event.detail); }]
            ])
          }

          cssClassName={"Embed-container"}

          getEmbeddedComponent={(embeddedReport) => {
            window.report = embeddedReport;
          }}
        />
      </header>
    </div>
  );
}

export default App;

