import { NextResponse } from 'next/server';
import { fetchProjects } from '@/lib/projects-api';

export async function GET() {
  try {
    const projects = await fetchProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Error fetching projects' }, { status: 500 });
  }
}