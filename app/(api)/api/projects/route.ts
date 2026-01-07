import { ProjectModel as Project } from "@/app/(features)/(protected)/(dashboard)/(client)/model";
import { connectDB } from "@/lib";
import { NextResponse } from "next/server";
import type { Project as ProjectType } from "@/app/(features)/(protected)/(dashboard)/(shared)/types";
export async function GET(req: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    let projects;

    if (userId) {
      projects = await Project.find({ clientId: userId });
    } else {
      projects = await Project.find();
    }

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const body = (await req.json()) as ProjectType;

    const { title, description, clientId } = body;

    console.log(body);
    if (!title || !description || !clientId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const project = await Project.create(body);
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}