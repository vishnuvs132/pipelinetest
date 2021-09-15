import { Express } from "express-serve-static-core"
import statisticsRoutes from './routes/statistics'

export default function (app: Express): void {
  app.use("/", statisticsRoutes);
  
  app.get('/', function (_req, res) {
    res.writeHead(225, {
      'Content-Type': 'text/html'
    });
    res.end("<h4 style='display: flex;justify-content: center;letter-spacing: 0.4;'>MS.04-01 (Statistics and analytics service)</h4>")
  })
  
  app.get('/*', function (_req, res) {
    res.redirect('/')
  })
}
