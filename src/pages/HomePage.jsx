import React from "react";
import {
  Button,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
} from "@mui/material";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100">
      {/* Hero Section */}
      <header className="w-full py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center">
        <Container maxWidth="lg">
          <Typography variant="h2" className="font-bold mb-4">
            Find Your Dream Job
          </Typography>
          <Typography variant="h6" className="mb-6">
            The easiest way to discover opportunities that match your skills and
            passion. Join today and find your ideal job.
          </Typography>
          <Button
            variant="contained"
            size="large"
            className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 font-semibold rounded-md shadow-md"
            href="/register"
          >
            Get Started
          </Button>
        </Container>
      </header>

      {/* About Section */}
      <section className="py-16">
        <Container maxWidth="md">
          <Typography
            variant="h4"
            className="text-center font-semibold mb-6 text-indigo-700"
          >
            About Finding Work
          </Typography>
          <Typography variant="body1" className="text-center text-gray-700">
            Finding Work is a platform designed to connect job seekers with
            their dream employers. From finding remote work to local
            opportunities, we provide the tools you need to succeed in your
            career search.
          </Typography>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            className="text-center font-semibold text-indigo-700 mb-10"
          >
            Services We Offer
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Job Search",
                desc: "Browse thousands of job listings and apply directly to top companies.",
              },
              {
                title: "Resume Builder",
                desc: "Create a professional resume in minutes with our easy-to-use tools.",
              },
              {
                title: "Job Alerts",
                desc: "Get notified about jobs that match your preferences instantly.",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="shadow-md hover:shadow-lg transition duration-300"
              >
                <CardContent className="p-6">
                  <Typography
                    variant="h6"
                    className="mb-2 text-indigo-700 font-semibold"
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" className="text-gray-600">
                    {service.desc}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-indigo-50">
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            className="text-center font-semibold text-indigo-700 mb-10"
          >
            Success Stories
          </Typography>
          <Grid container spacing={4}>
            {[
              {
                name: "Sarah Lee",
                jobTitle: "Software Engineer",
                testimonial:
                  "Finding Work helped me land my dream job in just a few weeks. Highly recommend!",
              },
              {
                name: "James Smith",
                jobTitle: "Product Manager",
                testimonial:
                  "The platform's tools made my job search smooth and easy. Thanks for the great service!",
              },
              {
                name: "Emily Davis",
                jobTitle: "Graphic Designer",
                testimonial:
                  "I love how Finding Work connects you directly with employers. It made my career transition seamless.",
              },
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <Typography
                    variant="h6"
                    className="text-indigo-600 font-semibold mb-2"
                  >
                    {testimonial.name}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="text-indigo-500 mb-4"
                  >
                    {testimonial.jobTitle}
                  </Typography>
                  <Typography variant="body2" className="text-gray-700">
                    "{testimonial.testimonial}"
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-indigo-600 text-white text-center">
        <Typography variant="body2">
          © {new Date().getFullYear()} Finding Work. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default HomePage;
