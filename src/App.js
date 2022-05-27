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
            id: '3f8b373d-82ee-4e8f-aee4-baef78f45ee2',
            embedUrl: "https://app.powerbi.com/reportEmbed?reportId=3f8b373d-82ee-4e8f-aee4-baef78f45ee2&groupId=80341867-c2f8-41d8-8c92-ed42fd7dccc2&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly93YWJpLXVzLWVhc3QtYS1wcmltYXJ5LXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0LyJ9",
            accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyIsImtpZCI6ImpTMVhvMU9XRGpfNTJ2YndHTmd2UU8yVnpNYyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwLyIsImlhdCI6MTY1MzY4MDcxMywibmJmIjoxNjUzNjgwNzEzLCJleHAiOjE2NTM2ODU4OTEsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJFMllBQW9zVEFXdm0vVmM2cnJ0T1NlOTNDT3NSVTJsQlQ2K3FxN2NXcTlhN1NLZVdyUkVTWE9Fbm5Ub3ZNcGF0NWFaeGRGam5ZcTRaaFQ2WlRJOXZ5ZmpZRjdZTFdjNyt2TGgzWlZOclcwRFE0NHhYeDB3QiIsImFtciI6WyJwd2QiLCJtZmEiXSwiYXBwaWQiOiI4NzFjMDEwZi01ZTYxLTRmYjEtODNhYy05ODYxMGE3ZTkxMTAiLCJhcHBpZGFjciI6IjIiLCJmYW1pbHlfbmFtZSI6Ik9jcmFuIiwiZ2l2ZW5fbmFtZSI6Ik1hcmllIExvdWlzZSIsImlwYWRkciI6IjQ3LjE4OC4xNDYuMTQzIiwibmFtZSI6Ik9jcmFuLCBNYXJpZSBMb3Vpc2UiLCJvaWQiOiI3ZTcwMWY0Yi05NmM5LTRjNGUtYWQwNy1lMTJkNzE3NGY1ZmQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMTE3NjEzNTU0MC0xNjc1ODA5MTItNTM4MjcyMjEzLTQ0NTA0NiIsInB1aWQiOiIxMDAzMjAwMTZGQThFRTMzIiwicmgiOiIwLkFRNEFXWnJ2SE94aWlrR1daaXM2X0Mwc3NBa0FBQUFBQUFBQXdBQUFBQUFBQUFBT0FQby4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJLY2psZWlYNWNvb2VzQXhxc3NGcFp1UndTMG5seDE5TUxUWjM5eWVYNGRZIiwidGlkIjoiMWNlZjlhNTktNjJlYy00MThhLTk2NjYtMmIzYWZjMmQyY2IwIiwidW5pcXVlX25hbWUiOiJPY3Jhbk1hcmllTG91aXNlQHByYWludGwuY29tIiwidXBuIjoiT2NyYW5NYXJpZUxvdWlzZUBwcmFpbnRsLmNvbSIsInV0aSI6IjgxY3ZXeS1YT0V5Sm43bXA2c1VNQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.lDaz2xFhpdZrzVi8YIFyXQOS3SuPA9CrlSKVfhI068UfpFTo1L1Nool5jUVizOl2IpumrYVIjoORyEozXl315kTmUXejfS5yWDdhRPl6Ar99WRyn_5UDQVneXMpHemWHClKZyDx6jiwLaNNN-1fUkYIOSlnHOn-m00BdksNz6q19rvzQ8QTq14Bjk_ZlSROyb37TASGPuU--BVKFvPvSu5HALIevNvpOxmK_nnDC8HPK2ZmGNFxq9PvIl8tylpnmLQypD6gV6e406NxFuO4vXBXF4TE8F1ebBCdCJCvdM7WAuxunLGBLu0lrPNJ-Z-kt9FjmBhUCvhdiWcFVeXBCZw',
            tokenType: models.TokenType.Aad,
            settings: {
              panes: {
                filters: {
                  expanded: false,
                  visible: true
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
