import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";

// Simple home component for testing
function SimpleHome() {
  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold text-black">IEDC IEM Salt Lake</h1>
      <p className="text-lg text-gray-600 mt-4">Innovation and Entrepreneurship Development Center</p>
    </div>
  );
}

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={SimpleHome} />
        <Route>
          <div className="p-8">
            <h1 className="text-2xl font-bold text-black">Page Not Found</h1>
          </div>
        </Route>
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;