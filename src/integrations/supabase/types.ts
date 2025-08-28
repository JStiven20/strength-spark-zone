export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.12 (cd3cf9e)"
  }
  public: {
    Tables: {
      appointments: {
        Row: {
          client_email: string
          client_name: string
          client_phone: string
          created_at: string
          id: string
          notes: string | null
          preferred_date: string
          preferred_time: string
          service_type: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          client_email: string
          client_name: string
          client_phone: string
          created_at?: string
          id?: string
          notes?: string | null
          preferred_date: string
          preferred_time: string
          service_type: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          client_email?: string
          client_name?: string
          client_phone?: string
          created_at?: string
          id?: string
          notes?: string | null
          preferred_date?: string
          preferred_time?: string
          service_type?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          assigned_user_id: string | null
          attendee_email: string
          attendee_name: string | null
          attendee_phone: string | null
          created_at: string
          end_time: string
          event_type_id: string
          google_event_id: string | null
          id: string
          notes: string | null
          reschedule_token: string | null
          start_time: string
          status: string
          tenant_id: string
          updated_at: string
        }
        Insert: {
          assigned_user_id?: string | null
          attendee_email: string
          attendee_name?: string | null
          attendee_phone?: string | null
          created_at?: string
          end_time: string
          event_type_id: string
          google_event_id?: string | null
          id?: string
          notes?: string | null
          reschedule_token?: string | null
          start_time: string
          status?: string
          tenant_id: string
          updated_at?: string
        }
        Update: {
          assigned_user_id?: string | null
          attendee_email?: string
          attendee_name?: string | null
          attendee_phone?: string | null
          created_at?: string
          end_time?: string
          event_type_id?: string
          google_event_id?: string | null
          id?: string
          notes?: string | null
          reschedule_token?: string | null
          start_time?: string
          status?: string
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bookings_event_type_id_fkey"
            columns: ["event_type_id"]
            isOneToOne: false
            referencedRelation: "event_types"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_settings: {
        Row: {
          buffers: number
          created_at: string
          id: string
          tenant_id: string
          timezone: string
          updated_at: string
          user_id: string | null
          working_hours: Json | null
        }
        Insert: {
          buffers?: number
          created_at?: string
          id?: string
          tenant_id: string
          timezone?: string
          updated_at?: string
          user_id?: string | null
          working_hours?: Json | null
        }
        Update: {
          buffers?: number
          created_at?: string
          id?: string
          tenant_id?: string
          timezone?: string
          updated_at?: string
          user_id?: string | null
          working_hours?: Json | null
        }
        Relationships: []
      }
      campaigns: {
        Row: {
          ab_test: boolean
          content: string | null
          created_at: string
          id: string
          name: string
          scheduled_at: string | null
          stats: Json | null
          status: string
          subject: string | null
          target_segment: Json | null
          tenant_id: string
          type: string
          updated_at: string
        }
        Insert: {
          ab_test?: boolean
          content?: string | null
          created_at?: string
          id?: string
          name: string
          scheduled_at?: string | null
          stats?: Json | null
          status?: string
          subject?: string | null
          target_segment?: Json | null
          tenant_id: string
          type: string
          updated_at?: string
        }
        Update: {
          ab_test?: boolean
          content?: string | null
          created_at?: string
          id?: string
          name?: string
          scheduled_at?: string | null
          stats?: Json | null
          status?: string
          subject?: string | null
          target_segment?: Json | null
          tenant_id?: string
          type?: string
          updated_at?: string
        }
        Relationships: []
      }
      contacts: {
        Row: {
          created_at: string
          email: string
          id: string
          message: string
          name: string
          phone: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          message: string
          name: string
          phone?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          message?: string
          name?: string
          phone?: string | null
        }
        Relationships: []
      }
      event_types: {
        Row: {
          active: boolean
          booking_url_slug: string | null
          color: string | null
          created_at: string
          description: string | null
          duration: number
          id: string
          name: string
          owner_user_id: string | null
          price: number | null
          round_robin: boolean
          team_members: string[] | null
          tenant_id: string
          updated_at: string
        }
        Insert: {
          active?: boolean
          booking_url_slug?: string | null
          color?: string | null
          created_at?: string
          description?: string | null
          duration?: number
          id?: string
          name: string
          owner_user_id?: string | null
          price?: number | null
          round_robin?: boolean
          team_members?: string[] | null
          tenant_id: string
          updated_at?: string
        }
        Update: {
          active?: boolean
          booking_url_slug?: string | null
          color?: string | null
          created_at?: string
          description?: string | null
          duration?: number
          id?: string
          name?: string
          owner_user_id?: string | null
          price?: number | null
          round_robin?: boolean
          team_members?: string[] | null
          tenant_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      forms: {
        Row: {
          created_at: string
          fields: Json
          id: string
          name: string
          published: boolean
          redirect_url: string | null
          require_consent: boolean
          slug: string
          submissions_count: number | null
          success_message: string | null
          tenant_id: string
          updated_at: string
          webhook_url: string | null
        }
        Insert: {
          created_at?: string
          fields?: Json
          id?: string
          name: string
          published?: boolean
          redirect_url?: string | null
          require_consent?: boolean
          slug: string
          submissions_count?: number | null
          success_message?: string | null
          tenant_id: string
          updated_at?: string
          webhook_url?: string | null
        }
        Update: {
          created_at?: string
          fields?: Json
          id?: string
          name?: string
          published?: boolean
          redirect_url?: string | null
          require_consent?: boolean
          slug?: string
          submissions_count?: number | null
          success_message?: string | null
          tenant_id?: string
          updated_at?: string
          webhook_url?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      templates: {
        Row: {
          channel: string
          content: Json
          created_at: string
          id: string
          name: string
          subject: string | null
          tenant_id: string
          updated_at: string
          variables: string[] | null
        }
        Insert: {
          channel: string
          content: Json
          created_at?: string
          id?: string
          name: string
          subject?: string | null
          tenant_id: string
          updated_at?: string
          variables?: string[] | null
        }
        Update: {
          channel?: string
          content?: Json
          created_at?: string
          id?: string
          name?: string
          subject?: string | null
          tenant_id?: string
          updated_at?: string
          variables?: string[] | null
        }
        Relationships: []
      }
      training_courses: {
        Row: {
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          title: string
          updated_at: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          title: string
          updated_at?: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          title?: string
          updated_at?: string
          video_url?: string | null
        }
        Relationships: []
      }
      user_enrollments: {
        Row: {
          completed_at: string | null
          course_id: string
          enrolled_at: string
          id: string
          progress: number | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          course_id: string
          enrolled_at?: string
          id?: string
          progress?: number | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          course_id?: string
          enrolled_at?: string
          id?: string
          progress?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_enrollments_course_id_fkey"
            columns: ["course_id"]
            isOneToOne: false
            referencedRelation: "training_courses"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
