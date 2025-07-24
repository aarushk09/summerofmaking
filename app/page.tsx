import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, Code, Zap, Target, CheckCircle } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">MathEasy</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </a>
             
              <a href="#docs" className="text-gray-600 hover:text-gray-900 transition-colors">
                Docs
              </a>
              <Button variant="outline" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="w-fit">
                  <Zap className="w-3 h-3 mr-1" />
                  Lightning Fast Generation
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Beautiful math animations in seconds.
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Generate highly accurate Manim code instantly. Transform complex mathematical concepts into stunning
                  visual animations without writing a single line of code.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gray-900 hover:bg-gray-800">
                  Start Creating
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  No coding required
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                  Export ready
                </div>
              </div>
            </div>



            {/* Video Placeholder */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                  <source src="/placeholder-animation.mp4" type="video/mp4" />
                  {/* Fallback content */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-100 to-pink-100">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto flex items-center justify-center">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                      <p className="text-gray-600 font-medium">Animation Preview</p>
                    </div>
                  </div>
                </video>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 border">
                <Code className="w-5 h-5 text-purple-600" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 border">
                <Target className="w-5 h-5 text-pink-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Everything you need to create</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional-grade tools designed for educators, students, and content creators who demand precision and
              speed.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">
                  Generate complex mathematical animations in seconds, not hours. Our AI understands mathematical
                  notation and creates pixel-perfect visualizations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Highly Accurate</h3>
                <p className="text-gray-600">
                  Built on advanced mathematical models ensuring every equation, graph, and transformation is
                  mathematically sound and visually stunning.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Clean Code</h3>
                <p className="text-gray-600">
                  Export production-ready Manim code that's well-structured, commented, and easy to customize for your
                  specific needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">10k+</div>
              <div className="text-gray-600">Animations Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">99.9%</div>
              <div className="text-gray-600">Accuracy Rate</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">5s</div>
              <div className="text-gray-600">Average Generation</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-gray-900">2k+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">Ready to transform your math content?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join thousands of educators and creators who are already using MathEasy to bring their mathematical
              concepts to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
              >
                View Examples
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="text-2xl font-bold text-gray-900">MathEasy</div>
              <p className="text-gray-600">Making mathematical visualization accessible to everyone.</p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Product</h4>
              <div className="space-y-2 text-gray-600">
                <div>Features</div>
                <div>Examples</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Resources</h4>
              <div className="space-y-2 text-gray-600">
                <div>Documentation</div>
                <div>Tutorials</div>
                <div>Support</div>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900">Company</h4>
              <div className="space-y-2 text-gray-600">
                <div>About</div>
                <div>Blog</div>
                <div>Contact</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2024 MathEasy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
