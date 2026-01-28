CREATE TABLE `entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`created_at` integer NOT NULL,
	`value` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `outflows` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`created_at` integer NOT NULL,
	`value` integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE `tasks` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`description` text NOT NULL,
	`created_at` integer NOT NULL,
	`done` integer DEFAULT false NOT NULL
);
