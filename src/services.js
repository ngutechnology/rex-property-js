module.exports = {
	AccountBilling: {
		methods: {
			describe: ['include_detail'],
			getSubscriptionDetails: [],
			getSubscriptionFeatures: [],
			getSubscriptionLimits: [],
		}
	},
	AccountBillingCredits: {
		methods: {
			describe: ['include_detail'],
			getAvailableCreditBreakdown: [],
			getAvailableCredits: [],
			getAvailableCreditsByType: [],
			getCreditCostForNewsletterRecipientCount: ['count'],
			getCreditCostForSmsString: ['sms_text'],
		}
	},
	AccountHierarchy: {
		methods: {
			describe: ['include_detail'],
			getParentAccountIds: [],
			getSubAccountIds: [],
		}
	},
	AccountSettings: {
		methods: {
			changeAccountOwner: ['new_owner_user_id', 'account_owner_password'],
			describe: ['include_detail'],
			getCountryRegions: [],
			getSetting: ['setting_key'],
			read: [],
			update: ['data'],
		}
	},
	AccountSettingsImages: {
		methods: {
			describe: ['include_detail'],
			getListingImageResizePreferences: [],
			updateListingImageResizePreferences: ['options'],
		}
	},
	AccountSettingsMatch: {
		methods: {
			describe: ['include_detail'],
			describeSettings: [],
			getAutoUpdateFallbackUserId: [],
			getAutoUpdateUserId: [],
			getDefaultSetting: ['key'],
			getDefaultSettings: ['keys'],
			getDisplaySenderAsListingAgent: [],
			getEbrochureLink: ['effective_link'],
			getEffectiveSetting: ['key'],
			getEffectiveSettings: ['keys'],
			getSendSmsOnPriceReduction: [],
			getSmsSingleListingTemplate: [],
			getStoredSettings: ['keys'],
			getTemplateForManualMatchEmail: [],
			getTemplateForNewListingEmail: [],
			getTemplateForNewListingSms: [],
			getTemplateForPriceReductionEmail: [],
			getTemplateForPriceReductionSms: [],
			getTemplateSmsMaxProperties: [],
			setAutoUpdateFallbackUserId: ['user_id'],
			setAutoUpdateUserId: ['user_id'],
			setDisplaySenderAsListingAgent: ['enabled'],
			setEbrochureLink: ['link'],
			setSendSmsOnPriceReduction: ['enabled'],
			setTemplateForManualMatchEmail: ['subject', 'body'],
			setTemplateForNewListingEmail: ['subject', 'body'],
			setTemplateForNewListingSms: ['body'],
			setTemplateForPriceReductionEmail: ['subject', 'body'],
			setTemplateForPriceReductionSms: ['body'],
			setTemplateSmsListingDetail: ['value'],
			setTemplateSmsMaxProperties: ['value'],
			updateStoredSettings: ['settings_map'],
		}
	},
	AccountSettingsPublication: {
		methods: {
			describe: ['include_detail'],
			getDefaultMarketingOverrides: [],
			getDefaultPublicationChannels: [],
			setDefaultMarketingOverrides: ['overrides'],
			setDefaultPublicationChannels: ['channels'],
		}
	},
	AccountSettingsSmtp: {
		methods: {
			clearServerDetails: [],
			describe: ['include_detail'],
			getSmtpSettings: ['refresh_settings'],
			testServerDetails: ['host', 'port', 'username', 'password', 'security'],
			updateServerDetails: ['host', 'port', 'username', 'password', 'security'],
			useSmtpFor: ['general_emails', 'edm_and_auto_updates'],
		}
	},
	AccountUsers: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['email_address', 'first_name', 'last_name', 'send_invite'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			invite: ['email_address', 'send_invite'],
			purge: ['id'],
			read: ['id', 'fields'],
			resetPassword: ['user_id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	ActivityStream: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	AdminAccountSharing: {
		methods: {
			acceptSharingInvitation: ['account_id'],
			cancelSharingAccess: ['account_id'],
			describe: ['include_detail'],
			getAccessibleAccountIds: [],
			getAccessibleMatchSourceAccountIds: [],
			getShareList: ['include_pending', 'include_only_match_sources'],
			rejectSharingInvitation: ['account_id'],
			sendSharingInvitation: ['account_id', 'dry_run'],
			setUseAsMatchSource: ['account_id', 'use_as_match_source'],
		}
	},
	AdminBrochures: {
		methods: {
			attachNewFileToObject: ['object_id', 'file_uri', 'meta'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			duplicate: ['id', 'name'],
			generateBrochure: ['brochure_id', 'listing_id', 'brochure_content', 'location_id', 'custom_merge_data', 'output_html'],
			getFilesAttachedToObject: ['object_id', 'return_format'],
			getMergeTags: ['return_format'],
			purge: ['id'],
			purgeFile: ['object_id', 'file_id'],
			purgeFileLibrary: ['object_id'],
			read: ['id'],
			renderSnippets: ['brochure_id', 'snippets', 'listing_id', 'location_id', 'icon_set_ids', 'data_overrides'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminCommDeductions: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminCommDefaultAgentDeductions: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminCommGrossStructures: {
		methods: {
			applyCommissionModelToAmount: ['model_id', 'amount'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminCustomFields: {
		methods: {
			createField: ['data'],
			createGroup: ['data'],
			createTab: ['data'],
			describe: ['include_detail'],
			getDefinition: ['module_name', 'include_hidden'],
			getFlatDefinition: ['module_name', 'include_hidden'],
			purgeField: ['id', 'confirm'],
			purgeGroup: ['id'],
			purgeTab: ['id'],
			readField: ['id'],
			readGroup: ['id', 'include_fields'],
			readTab: ['id', 'include_groups', 'include_fields'],
			setPrivilegeLockdownStatusForTab: ['id', 'locked_down'],
			updateField: ['data'],
			updateGroup: ['data'],
			updateTab: ['data'],
		}
	},
	AdminDealStatuses: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			combine: ['winning_record_id', 'losing_record_id', 'dry_run'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminDealTypes: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			combine: ['winning_record_id', 'losing_record_id', 'dry_run'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminHtmlTemplates: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getIdOfActiveInstanceForTemplateType: ['template_type'],
			getTemplateTypes: [],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			readDefaultForTemplateType: ['template_type'],
			renderDefaultInstanceForTemplateType: ['template_type', 'data'],
			renderTemplate: ['id', 'data', 'debug', 'dump'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			setAsDefaultTemplate: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminIconSets: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getAllIconSets: ['size'],
			getIconSetById: ['id', 'size'],
			getIconSetForAccount: ['size'],
			getIconSetForLocation: ['size', 'location_id'],
			getIconSetForUser: ['size'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminMailingLists: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			combineMailingLists: ['source_list_id', 'target_list_id'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getListMembers: ['list_id', 'count_only', 'include_unsubscribed', 'include_active_contacts_only', 'case_sensitive', 'unique_members_by_email_address'],
			importEmailAddresses: ['list_id', 'email_addresses', 'dry_run'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminMarketingPacks: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminMarketingProviders: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminMergeTemplates: {
		methods: {
			archive: ['id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getMergeTagsForRecordType: ['record_type', 'return_format'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			recoverFromArchive: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminOfficeLocations: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			reassignRecordsToAnotherLocation: ['id', 'new_location_id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminPortalDefinitions: {
		methods: {
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeFeedFormats: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getActivationInstructions: ['id'],
			getSupportedUserMetaKeys: ['id'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminPortalProfiles: {
		methods: {
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getUserMetaDataForProfile: ['id', 'user_ids', 'meta_keys'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
			updateUserMetaDataForProfile: ['id', 'update_map'],
		}
	},
	AdminResources: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminTags: {
		methods: {
			autocomplete: ['search_string', 'object_type', 'limit'],
			combineTags: ['source_tag_id', 'target_tag_id'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminTemplateLibraries: {
		methods: {
			addTemplateToLibrary: ['service_name', 'service_object_id', 'library_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getLibrariesManagedByAccount: ['ids_only'],
			getSubscribedLibraryIds: [],
			hideLibraryTemplate: ['service_name', 'service_object_id'],
			removeTemplateFromLibrary: ['service_name', 'service_object_id'],
			subscribeToLibrary: ['id'],
			unhideLibraryTemplate: ['service_name', 'service_object_id'],
			unsubscribeFromLibrary: ['id'],
		}
	},
	AdminTracks: {
		methods: {
			archive: ['id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getRemindeeList: [],
			purge: ['id'],
			read: ['id'],
			recoverFromArchive: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AdminValueLists: {
		methods: {
			addValueToList: ['list_name', 'display_text'],
			combineValuesInList: ['list_name', 'value_source_id', 'value_target_id'],
			deleteValueInList: ['list_name', 'value_id'],
			describe: ['include_detail'],
			getListValues: ['list_name', 'include_system_values', 'include_omitted_values', 'retrieve_meta'],
			getValueListNames: [],
			hideSystemValueInList: ['list_name', 'value_id'],
			renameValueInList: ['list_name', 'value_id', 'display_text'],
			showSystemValueInList: ['list_name', 'value_id'],
		}
	},
	AdminWebhooks: {
		methods: {
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			sendTestEvent: [],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Announcements: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			toggleDismissal: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Appointments: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Appraisals: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getMatchingMatchProfileIds: ['id', 'listing_type', 'full_match', 'cross_account'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	AsyncActions: {
		methods: {
			abort: ['async_token'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getActiveRequests: ['async_token'],
			getResult: ['async_token', 'purge_result'],
			getStatus: ['async_token'],
			perform: ['async_token', 'async'],
			performNonBlockingAction: ['async_token'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	AuditLogs: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Authentication: {
		methods: {
			describe: ['include_detail'],
			login: ['email', 'password', 'account_id', 'token_lifetime'],
			logout: [],
			resetPassword: ['application', 'email'],
		}
	},
	Backup: {
		methods: {
			describe: ['include_detail'],
			performBackup: [],
		}
	},
	Buildings: {
		methods: {
			associateProperties: ['id', 'property_id_unit_num_map'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			setGeoLocation: ['id', 'latitude', 'longitude'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	CommissionWorksheets: {
		methods: {
			copyFromWorksheet: ['source_worksheet_id', 'target_worksheet_id'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
			validateCompleteWorksheet: ['worksheet_id'],
			verifyContractStatus: ['worksheet_id', 'event_to_verify', 'event_date'],
		}
	},
	ContactMatchAlerts: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getIdsOfMatchProfilesWithActiveCampaigns: ['contact_id'],
			getPendingAlerts: ['context', 'context_record_id'],
			getSentContent: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	ContactMatchManualSendLog: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getSentContent: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	ContactSocialProfiles: {
		methods: {
			connectProfile: ['contact_id', 'connection_id', 'network_profile_id', 'person_or_company'],
			describe: ['include_detail'],
			disconnectProfile: ['id'],
			getAllConnectedProfiles: ['contact_id', 'include_network_data'],
			getCombinedStream: ['contact_id', 'timestamp', 'before_or_after', 'limit', 'keywords'],
			getProfile: ['id'],
		}
	},
	Contacts: {
		methods: {
			archive: ['id'],
			autocomplete: ['search_string', 'limit_to_contact_type', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			findPossibleDuplicates: ['email', 'phone', 'name_first', 'name_last', 'company_name', 'contact_type'],
			getInvalidReason: ['data_type', 'string'],
			getMatchSummary: ['contact_id'],
			getRecordStream: ['id', 'timestamp', 'before_or_after', 'limit'],
			read: ['id', 'fields', 'extra_fields'],
			recoverFromArchive: ['id'],
			recoverFromTrash: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	ContractEvents: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Contracts: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	CrossAccountRecordTransfer: {
		methods: {
			describe: ['include_detail'],
			queueTransfer: ['service_name', 'target_account_id', 'criteria'],
		}
	},
	CrossServiceViewstates: {
		methods: {
			describe: ['include_detail'],
			getAvailableServices: [],
			getGroupedRecordIdsForRecordIds: ['service', 'record_ids', 'related_service', 'options'],
			getGroupedRecordIdsWithRelationDetails: ['service', 'record_ids', 'related_service', 'options'],
			getOptionsForRelatedService: ['service', 'related_service'],
			getRecordIdsForCriteria: ['service', 'related_service', 'criteria', 'options'],
			getRecordIdsForRecordIds: ['service', 'record_ids', 'related_service', 'options'],
			getRecordIdsForViewstateId: ['service', 'viewstate_id', 'related_service', 'options'],
			getServiceMap: ['return_flat'],
			getTargetsForService: ['service'],
			getViewstateIdForCriteria: ['service', 'related_service', 'criteria', 'options'],
			getViewstateIdForRecordIds: ['service', 'record_ids', 'related_service', 'options'],
			getViewstateIdForViewstateId: ['service', 'viewstate_id', 'related_service', 'options'],
		}
	},
	CustomFields: {
		methods: {
			describe: ['include_detail'],
			describeSearchFields: ['service_name', 'field_names_only'],
			getValuesKeyedByFieldId: ['service_name', 'service_object_id', 'limit_to'],
			getValuesKeyedByFieldName: ['service_name', 'service_object_id', 'limit_to'],
			searchGetMatchingServiceRecordIds: ['service_name', 'criteria', 'within_service_record_ids'],
			setFieldValues: ['service_name', 'service_object_id', 'value_map'],
		}
	},
	DataCleanup: {
		methods: {
			describe: ['include_detail'],
			listInvalidSuburbs: ['output_csv', 'account_ids'],
		}
	},
	Deals: {
		methods: {
			archiveDeal: ['deal_id', 'archive_date', 'reason_id', 'archive_note', 'lost_agency_id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			unarchiveDeal: ['deal_id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	EmailDropbox: {
		methods: {
			autoAttachToContacts: ['id', 'replace_existing'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getEmailDropboxAddressForUser: ['user_id'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Engagement: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Export: {
		methods: {
			describe: ['include_detail'],
			describeExportOptions: ['service_name'],
			describeSupportedServices: [],
			performExport: ['async_token', 'service_name', 'criteria', 'options', 'output_format'],
			queueExport: ['service_name', 'criteria', 'options', 'output_format'],
		}
	},
	Feedback: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getContactViewstateForSearch: ['criteria'],
			getListingViewstateForSearch: ['criteria'],
			read: ['id'],
			recoverFromTrash: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
			updateApprovalStatus: ['id', 'status'],
		}
	},
	Help: {
		methods: {
			describe: ['include_detail'],
			getHelpVideoCategories: [],
			getHelpVideos: ['keyword', 'category_ids'],
			getTooltip: ['id'],
			search: ['keyword', 'sources'],
			searchHelpVideos: ['keyword'],
		}
	},
	Holds: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			recoverFromTrash: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Import: {
		methods: {
			describe: ['include_detail'],
			describeImporter: ['importer_name'],
			getImporterNames: [],
			importOne: ['importer_name', 'import_type', 'data', 'record_id', 'options'],
		}
	},
	ImportRecordIds: {
		methods: {
			describe: ['include_detail'],
			getExternalIdForRecordId: ['service_name', 'record_id', 'namespace', 'return_all'],
			getOldIdsForRecordId: ['service_name', 'record_id'],
			getRecordIdByServiceForOldId: ['old_id'],
			getRecordIdForOldId: ['service_name', 'old_id'],
			setExternalIdForRecordId: ['service_name', 'record_id', 'namespace', 'external_id', 'replace_existing'],
		}
	},
	InvoiceTransactions: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			reverse: ['id', 'reason'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Invoices: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
			void: ['id'],
		}
	},
	Leads: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getAllowedSourcesForAccount: ['include_user_sources'],
			getLeadDropboxAddressForSystem: [],
			getLeadDropboxAddressForUser: ['user_id'],
			purge: ['id'],
			read: ['id', 'fields'],
			recoverFromTrash: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			setAllowedSourcesForAccount: ['sources', 'return_sources'],
			toggleCompletionState: ['id', 'is_completed', 'dry_run'],
			toggleSpamMarker: ['id', 'is_spam'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	ListingEvents: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	ListingMatchAlerts: {
		methods: {
			cancel: ['id'],
			cancelExistingAlerts: ['listing_id'],
			create: ['listing_id', 'alert_type', 'partial_or_full', 'price_previous', 'price_new', 'force_sms'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getContactViewstateId: ['id', 'listing_id', 'alert_send_status', 'alert_type', 'my_contacts_only'],
			getSummaryContactBreakdown: ['id', 'listing_id', 'send_status'],
			getSummarySendStatusBreakdown: ['id', 'listing_id'],
			read: ['id', 'extra_fields'],
			readCurrentForListing: ['listing_id', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	ListingPortalUploads: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getErrorsPreventingUpload: ['listing_id'],
			getStatuses: ['listing_id'],
			queue: ['listing_id', 'portal_profile_ids', 'portal_listing_status'],
			read: ['id', 'fields', 'extra_fields'],
			resetPortalsToDefault: ['listing_id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			updatePortals: ['listing_id', 'update_map'],
		}
	},
	ListingPublication: {
		methods: {
			describe: ['include_detail'],
			getErrorsPreventingPublication: ['listing_id', 'validate_if_published'],
			getMarketingOverrides: ['listing_id'],
			getPublicationStatus: ['listing_id'],
			publish: ['listing_id'],
			setActivePublicationChannels: ['listing_id', 'channels'],
			updateMarketingOverrides: ['listing_id', 'data'],
		}
	},
	Listings: {
		methods: {
			autocomplete: ['search_string', 'listing_states', 'limit', 'return_viewstate'],
			changeListingCategory: ['id', 'listing_category_id'],
			changeState: ['id', 'state', 'details'],
			create: ['data', 'return_id', 'options'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			duplicate: ['id', 'listing_category_id', 'contacts'],
			getDefaultExternalId: ['listing_id'],
			getMatchingMatchProfileIds: ['id', 'full_match', 'cross_account'],
			getPropertiesForListings: ['listing_ids', 'listing_viewstate_id', 'return_format'],
			getRecordStream: ['id', 'timestamp', 'before_or_after', 'limit'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
			updateArchivedStateDetails: ['id', 'details'],
		}
	},
	MailMerge: {
		methods: {
			describe: ['include_detail'],
			getCreditCostForMerge: ['merge_type', 'valid_merge_objects', 'location_id'],
			getMergeObjectsAndMeta: ['merge_type', 'module_name', 'search_criteria', 'reln_type', 'include_recs_wo_reln', 'fallback_recipient_name', 'cc_contact_ids', 'bcc_contact_ids'],
			getMergedStringSet: ['merge_type', 'merge_object', 'location_id', 'include_email_signature', 'include_attachments'],
			queueMergeUsingObjects: ['merge_type', 'merge_objects', 'mail_merge_template_id', 'custom_template', 'attachments', 'include_letterhead', 'location_id'],
			validateMergeObject: ['merge_type', 'merge_object'],
			validateMergeObjects: ['merge_type', 'merge_objects'],
		}
	},
	MailMergeEventLogs: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getSentContent: ['id'],
			getViewstateIdForMergeRecords: ['event_id', 'record_type'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	MassActions: {
		methods: {
			describe: ['include_detail'],
			queueListingPublication: ['viewstate_id', 'record_ids'],
			queueMailingListUpdate: ['mailing_list_id', 'add_or_remove', 'viewstate_id', 'record_ids'],
			queueOwnerReassignment: ['service_name', 'new_owner_user_id', 'viewstate_id', 'record_ids'],
			queuePermissionUpdate: ['service_name', 'permission_type', 'add_or_remove', 'user_ids', 'viewstate_id', 'record_ids'],
			queuePortalForceUpload: ['portal_profile_ids', 'viewstate_id', 'record_ids'],
			queuePortalStatusReset: ['viewstate_id', 'record_ids'],
			queuePortalStatusUpdate: ['status_map', 'viewstate_id', 'record_ids'],
			queuePublicationChannelUpdate: ['channel_map', 'viewstate_id', 'record_ids'],
			queueRecordStateUpdate: ['service_name', 'new_state', 'viewstate_id', 'record_ids'],
			queueReminderReassignment: ['service_name', 'new_remindee', 'old_remindee', 'viewstate_id', 'record_ids'],
			queueTagUpdate: ['service_name', 'tags', 'add_or_remove', 'viewstate_id', 'record_ids'],
		}
	},
	MatchAlertOutbound: {
		methods: {
			describe: ['include_detail'],
			getEmailBodyContent: ['contact_id', 'template', 'send_from_user_id'],
			getSmsBodyContent: ['contact_id', 'template', 'send_from_user_id'],
			preview: ['contact_id', 'listing_ids', 'content', 'template', 'dump', 'send_from_user_id', 'email_or_sms'],
			sendManualEmail: ['match_profile_id', 'contact_id', 'listing_ids', 'content', 'template', 'send_user_copy', 'send_from_user_id'],
		}
	},
	MatchAlertSendQueue: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getContactViewstateId: ['criteria'],
			getListingOwnershipBreakdown: ['criteria'],
			getListingViewstateId: ['criteria'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	MatchProfiles: {
		methods: {
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getContactIds: ['match_profile_criteria'],
			getContactViewstateId: ['match_profile_criteria', 'contact_criteria'],
			matchAgainstListings: ['match_profile_id', 'listing_criteria'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	NewsletterCampaignBlocks: {
		methods: {
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getBlocksForNewsletter: ['newsletter_id', 'extra_fields'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	NewsletterCampaigns: {
		methods: {
			attachNewFileToObject: ['object_id', 'file_uri', 'meta'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			duplicate: ['id', 'name'],
			getAutoGeneratedPlainTextContent: ['id'],
			getCollectHtmlLink: ['id', 'contact_id'],
			getCreditCost: ['id'],
			getErrorsPreventingSend: ['id', 'check_for_recipients'],
			getFilesAttachedToObject: ['object_id', 'return_format'],
			getFinalRecipients: ['id', 'include_detail'],
			getPlainTextContent: ['id'],
			getRecipientBreakdown: ['id'],
			getRecipientCriteria: ['id'],
			purge: ['id'],
			purgeFile: ['object_id', 'file_id'],
			purgeFileLibrary: ['object_id'],
			read: ['id', 'fields', 'extra_fields'],
			recoverFromTrash: ['id'],
			renderNewsletter: ['id', 'format', 'dump'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			send: ['id'],
			sendPreview: ['id', 'email_address', 'format'],
			setPlainTextContent: ['id', 'content'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
			updateRecipientCriteria: ['id', 'mailing_list_ids', 'segmentation_criteria'],
		}
	},
	NewsletterReports: {
		methods: {
			describe: ['include_detail'],
			describeAvailableStats: [],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getClicksByLink: ['newsletter_id', 'criteria', 'order_by'],
			getContactClicksByLink: ['newsletter_id', 'criteria', 'order_by'],
			getContactInteractionSummary: ['newsletter_id', 'criteria', 'order_by'],
			getContactViewstateForSearch: ['newsletter_id', 'criteria'],
			getHourlyStats: ['newsletter_id', 'start_time', 'end_time'],
			getStats: ['newsletter_id', 'required_stats'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Notes: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id'],
			recoverFromTrash: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Oabs: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	OverpaymentTransactions: {
		methods: {
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	PortalActivity: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	PortalUploadQueue: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	PortalUploadQueueTargets: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	ProjectStages: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Projects: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	Properties: {
		methods: {
			archive: ['id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			findPossibleDuplicate: ['property_category_id', 'adr_street_number', 'adr_street_name', 'adr_suburb_or_town', 'adr_locality', 'adr_state_or_region', 'adr_postcode', 'adr_unit_number', 'exclude_ids'],
			getHistory: ['id', 'limit'],
			getListingImages: ['id', 'limit'],
			getRecordStream: ['id', 'timestamp', 'before_or_after', 'limit'],
			getStatusStub: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			recoverFromArchive: ['id'],
			recoverFromTrash: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			setGeoLocation: ['id', 'latitude', 'longitude'],
			trash: ['id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	PublicActions: {
		methods: {
			describe: ['include_detail'],
			getActionDetails: ['action_token', 'purpose'],
			processPermissionRequest: ['action_token', 'grant_permission'],
			processUserAccessInvite: ['action_token', 'accept_or_reject'],
			registerUser: ['action_token', 'first_name', 'last_name', 'email_address', 'password'],
			resetUserPassword: ['action_token', 'password'],
		}
	},
	PublishedListings: {
		methods: {
			autocomplete: ['search_string', 'listing_states', 'limit'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getUniqueListingSuburbs: [],
			read: ['id', 'search_arguments', 'extra_fields', 'result_format'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	QuickStats: {
		methods: {
			describe: ['include_detail'],
			describeAvailableStats: [],
			getStats: ['required_stats', 'user_id'],
		}
	},
	RecordStream: {
		methods: {
			describe: ['include_detail'],
			getAvailableSourceServices: ['service_name'],
			getRecordStream: ['service_name', 'record_id', 'source_services', 'direction', 'limit', 'last_post', 'options'],
			getRecordStreamEntry: ['source_service', 'id', 'type'],
		}
	},
	Reminders: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getRemindeeList: [],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			toggleCompletionState: ['id', 'is_completed'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	ReportCenter: {
		methods: {
			describe: ['include_detail'],
			getReportCategories: [],
			getReportCenterDefinition: [],
			getReports: ['category_id'],
		}
	},
	ReportGenerator: {
		methods: {
			describe: ['include_detail'],
			describeReport: ['id', 'view_id'],
			generateReport: ['id', 'view_id', 'parameters', 'location_id', 'output_format'],
			getAvailableReports: [],
		}
	},
	RssFeeds: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	SavedFilters: {
		methods: {
			archive: ['id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			favourite: ['filter_id'],
			read: ['id', 'fields', 'extra_fields'],
			run: ['filter_id', 'search_args'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			touchLastRunDate: ['filter_id'],
			trash: ['id'],
			unfavourite: ['filter_id'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	SearchUtility: {
		methods: {
			describe: ['include_detail'],
			normalizeRelativeTime: ['relative_time_string', 'format'],
		}
	},
	SecurityObjectPermissions: {
		methods: {
			describe: ['include_detail'],
			getAssignedPermissionsForObjects: ['object_type', 'object_ids', 'permission_types'],
			getPermissionsForObject: ['object_type', 'object_id', 'include_detail'],
			getReadPermissionsForObjects: ['object_type', 'object_ids'],
			getUpdatePermissionsForObjects: ['object_type', 'object_ids'],
			getUsersWithOwnerPermissionsOnObjects: ['object_type', 'object_ids'],
			grantPermission: ['object_type', 'object_id', 'user_id', 'permission_type'],
			grantPermissions: ['object_type', 'object_id', 'permission_map'],
			requestPermission: ['object_type', 'object_id', 'user_id', 'permission_type', 'reason_for_request'],
			revokePermission: ['object_type', 'object_id', 'user_id'],
			revokePermissions: ['object_type', 'object_id', 'user_ids'],
			transferObjectOwnershipToUser: ['object_type', 'object_id', 'new_owner_id'],
		}
	},
	SecurityObjectRights: {
		methods: {
			describe: ['include_detail'],
			getRightsForAllUsersOnObject: ['object_type', 'object_id', 'right_types', 'include_detail'],
			getRightsForCurrentUserOnObject: ['object_type', 'object_id', 'right_types'],
			getRightsForCurrentUserOnObjects: ['object_type', 'object_ids', 'right_types'],
			getUserRightsForObject: ['user_id', 'object_type', 'object_id', 'right_types'],
			userCanArchiveObject: ['object_type', 'object_id', 'user_id'],
			userCanPermObject: ['object_type', 'object_id', 'user_id'],
			userCanPurgeObject: ['object_type', 'object_id', 'user_id'],
			userCanReadObject: ['object_type', 'object_id', 'user_id'],
			userCanTrashObject: ['object_type', 'object_id', 'user_id'],
			userCanUpdateObject: ['object_type', 'object_id', 'user_id'],
		}
	},
	SecurityPermissionGroups: {
		methods: {
			addUserToGroup: ['user_id', 'group_id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getIdsOfUsersInSameGroupAsUserId: ['user_id', 'include_user'],
			purge: ['id'],
			read: ['id'],
			removeUserFromGroup: ['user_id', 'group_id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	SecurityPrivilegeSets: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			duplicate: ['id', 'name'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	SecurityPrivileges: {
		methods: {
			describe: ['include_detail'],
			describePrivilegeGroups: ['account_id'],
			getEffectivePrivilegesForUser: ['user_id', 'describe_privileges'],
			getEffectivePrivilegesForUsers: ['user_ids'],
			getPrivilegesForUser: ['user_id', 'describe_privileges'],
			setPrivilegesForUser: ['user_id', 'privilege_set_ids', 'extra_privilege_ids', 'describe_privileges'],
		}
	},
	SocialUtility: {
		methods: {
			describe: ['include_detail'],
			getFriends: ['connection_id', 'network_profile_id'],
			getProfile: ['connection_id', 'network_profile_id', 'person_or_company'],
			getProfileIdFromScreenName: ['connection_id', 'screen_name', 'person_or_company'],
			getProfileStream: ['connection_id', 'network_profile_id', 'timestamp', 'before_or_after', 'limit'],
			searchProfiles: ['connection_id', 'names', 'person_or_company', 'limit'],
		}
	},
	Stream: {
		methods: {
			describe: ['include_detail'],
			describeAvailableStreams: [],
			getStream: ['required_streams', 'timestamp', 'before_or_after', 'limit', 'user_id'],
		}
	},
	Support: {
		methods: {
			createTicket: ['subject', 'description', 'is_urgent', 'file_urls', 'email_override', 'name_override'],
			describe: ['include_detail'],
			getTicketUrl: ['ticket_id'],
		}
	},
	SystemFieldUpdate: {
		methods: {
			batchUpdateObjectSystemFields: ['service_name', 'object_data_map'],
			describe: ['include_detail'],
			updateObjectSystemFields: ['service_name', 'object_id', 'data', 'ignore_missing_fields'],
		}
	},
	SystemValues: {
		methods: {
			autocompleteCategoryValues: ['list_name', 'search_string', 'limit'],
			describe: ['include_detail'],
			getCategoryValues: ['list_name', 'ids_only', 'labels_only'],
			getValueCategories: [],
		}
	},
	ThirdPartyServiceCampaignTrack: {
		methods: {
			describe: ['include_detail'],
			getPropertyDeepLink: ['connection_id', 'local_record_id'],
			getRecordMetaData: ['connection_id', 'local_record_id'],
			queueListingDataPush: ['connection_id', 'local_record_id', 'data_types_to_push'],
		}
	},
	ThirdPartyServiceCoreLogicAccount: {
		methods: {
			describe: ['include_detail'],
			getAccessibleAccounts: ['connection_id'],
		}
	},
	ThirdPartyServiceCoreLogicImport: {
		methods: {
			describe: ['include_detail'],
			getImportHistory: ['connection_id'],
			queuePropertyImport: ['connection_id', 'remote_property_ids', 'options'],
		}
	},
	ThirdPartyServiceCoreLogicProperty: {
		methods: {
			describe: ['include_detail'],
			getDeepLink: ['connection_id', 'type', 'remote_property_id', 'local_property_id'],
			getPreviouslyImportedPropertyIds: ['connection_id', 'remote_property_ids'],
			getPropertyDetails: ['connection_id', 'local_property_id', 'remote_property_id', 'detail_types'],
			getSummaryByPropertyIds: ['connection_id', 'remote_property_ids'],
			setPropertyRemoteId: ['connection_id', 'local_property_id', 'remote_property_id'],
		}
	},
	ThirdPartyServiceCoreLogicSearch: {
		methods: {
			describe: ['include_detail'],
			getPropertyIdsFromSuggestion: ['connection_id', 'suggestion', 'search_type'],
			getSuggestion: ['connection_id', 'search', 'search_type'],
			polygonSearch: ['connection_id', 'coordinates'],
			refinePropertyIdList: ['connection_id', 'subset_property_ids', 'criteria'],
		}
	},
	ThirdPartyServiceFirstNational: {
		methods: {
			describe: ['include_detail'],
			getProcessedDetails: ['connection_id', 'service_name', 'record_id'],
			setProcessedDetails: ['connection_id', 'service_name', 'record_id', 'details'],
			uploadData: ['connection_id', 'service_name', 'record_id', 'async'],
		}
	},
	ThirdPartyServiceHomepass: {
		methods: {
			describe: ['include_detail'],
			getPublicationTimeOfLastProcessedActivity: ['connection_id', 'service_name', 'record_id'],
			setPublicationTimeOfLastProcessedActivity: ['connection_id', 'service_name', 'record_id', 'publication_time'],
		}
	},
	ThirdPartyServiceLJHooker: {
		methods: {
			describe: ['include_detail'],
			getAgentDetails: ['remote_office_id'],
			getOfficeDetails: ['names_only', 'remote_office_id'],
			getProcessedDetails: ['connection_id', 'service_name', 'record_id'],
			getRemoteAgencyId: ['connection_id'],
			getRemoteAgentId: ['connection_id'],
			getRemoteAgentIdMap: ['connection_id'],
			setProcessedDetails: ['connection_id', 'service_name', 'record_id', 'details'],
			uploadData: ['connection_id', 'service_name', 'record_id', 'async'],
		}
	},
	ThirdPartyServiceMFiles: {
		methods: {
			describe: ['include_detail'],
			getAutoUploadOnUpdate: ['connection_id', 'service_name', 'record_id'],
			getProcessedDetails: ['connection_id', 'service_name', 'record_id'],
			isIntegrationAvailable: ['connection_id', 'service_name', 'record_id'],
			setAutoUploadOnUpdate: ['connection_id', 'service_name', 'record_id', 'active'],
			setProcessedDetails: ['connection_id', 'service_name', 'record_id', 'details'],
			unlinkFromRemoteRecord: ['connection_id', 'service_name', 'record_id'],
			uploadData: ['connection_id', 'service_name', 'record_id', 'async'],
		}
	},
	ThirdPartyServicePriceFinderImport: {
		methods: {
			describe: ['include_detail'],
			getImportHistory: ['connection_id'],
			queuePropertyImport: ['connection_id', 'remote_property_ids', 'options'],
		}
	},
	ThirdPartyServicePriceFinderProperty: {
		methods: {
			describe: ['include_detail'],
			getDeepLink: ['connection_id', 'type', 'remote_property_id', 'local_property_id'],
			getPropertyDetails: ['connection_id', 'local_property_id', 'remote_property_id'],
			setPropertyRemoteId: ['connection_id', 'local_property_id', 'remote_property_id'],
		}
	},
	ThirdPartyServicePriceFinderSearch: {
		methods: {
			describe: ['include_detail'],
			getStreetSuggestion: ['connection_id', 'street_name', 'suburb'],
			polygonSearch: ['connection_id', 'coordinates'],
			propertySearch: ['connection_id', 'locality_id', 'street_id', 'criteria', 'include_empty_street_numbers'],
		}
	},
	ThirdPartyServiceRecordLinks: {
		methods: {
			describe: ['include_detail'],
			getConnectedServiceIdsForRecord: ['local_service_name', 'local_record_id'],
			getConnectedServicesForRecord: ['local_service_name', 'local_record_id'],
		}
	},
	ThirdPartyServiceReiFormsLive: {
		methods: {
			attachExistingForm: ['local_id', 'connection_id', 'service_name', 'remote_form_id'],
			countAttachedForms: ['local_ids', 'connection_id', 'service_name'],
			createForm: ['local_id', 'connection_id', 'service_name', 'form_template_id', 'form_name', 'contacts', 'is_private', 'options'],
			describe: ['include_detail'],
			duplicateForm: ['local_id', 'connection_id', 'service_name', 'form_id', 'form_name', 'is_private', 'new_local_id', 'new_service_name'],
			getAttachedForms: ['local_id', 'connection_id', 'service_name'],
			getDeepLink: ['local_id', 'connection_id', 'service_name', 'form_id'],
			getFormAttachedContacts: ['local_id', 'connection_id', 'service_name', 'form_id'],
			getTemplateDetails: ['connection_id', 'template_id', 'service_name'],
			listTemplatesByServiceName: ['connection_id', 'service_name'],
			pushLatestFormDetails: ['local_id', 'connection_id', 'service_name', 'form_id', 'force_update', 'options'],
			setFormName: ['local_id', 'connection_id', 'service_name', 'form_id', 'new_form_name', 'update_on_remote'],
			syncFormAttachedContacts: ['local_id', 'connection_id', 'service_name', 'form_id', 'contacts'],
			unlinkForm: ['local_id', 'connection_id', 'service_name', 'form_id', 'delete_on_remote'],
		}
	},
	ThirdPartyServiceReinzForms: {
		methods: {
			describe: ['include_detail'],
			getContractDeepLink: ['connection_id', 'local_contract_id'],
			getListingMetaData: ['connection_id', 'local_listing_id'],
			pushContractData: ['connection_id', 'local_contract_id'],
			setContractRemoteId: ['connection_id', 'local_contract_id', 'remote_contract_id'],
		}
	},
	ThirdPartyServiceStockdaleLeggo: {
		methods: {
			describe: ['include_detail'],
			ensureListingPublishable: ['connection_id', 'listing_id'],
			getAccountDetails: ['connection_id'],
			getProcessedDetails: ['connection_id', 'service_name', 'record_id'],
			setProcessedDetails: ['connection_id', 'service_name', 'record_id', 'details'],
			uploadData: ['connection_id', 'service_name', 'record_id', 'async'],
		}
	},
	ThirdPartyServices: {
		methods: {
			changeConnectionState: ['id', 'new_connection_state'],
			createConnection: ['service_type_id', 'name'],
			describe: ['include_detail'],
			describeConnectableServiceType: ['service_type_id'],
			describeConnectableServiceTypes: ['service_type_ids', 'limit_to_user_specific_services'],
			disconnectConnection: ['id'],
			getAuthenticationUrl: ['id', 'user_id'],
			getConnection: ['id'],
			getConnectionIdsForServicesOfType: ['service_type_id'],
			getConnections: ['ids_only', 'connection_state', 'limit_to_ids'],
			getPermissions: ['connection_id', 'user_id'],
			getUserMasterCredentials: [],
			setConnectionCredentials: ['id', 'credentials', 'user_id'],
			setConnectionName: ['id', 'name'],
			setConnectionRestrictions: ['id', 'restrict_access', 'allowed_user_ids'],
			setPermissions: ['connection_id', 'user_id', 'permissions'],
			setUserMasterCredentials: ['service_type_id', 'credentials'],
		}
	},
	TrackInstance: {
		methods: {
			addTrackToRecord: ['contact_id', 'property_id', 'listing_id', 'project_id', 'project_stage_id', 'track_id', 'remindee_override', 'start_date'],
			cancelTrack: ['track_instance_id'],
			describe: ['include_detail'],
			getOverview: ['track_instance_id', 'get_full_track'],
			reassignTrack: ['track_instance_id', 'reassign_to', 'reassign_from', 'reminder_status'],
			rescheduleTrack: ['track_instance_id', 'reschedule_from', 'reschedule_date'],
		}
	},
	TrustAccountDeposits: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			complete: ['id'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			void: ['id'],
		}
	},
	TrustAccountReconciliations: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			complete: ['id'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getReconcilableTransactions: ['id', 'limit_to'],
			getReconciliationDateRange: ['id'],
			getReconciliationSummary: ['id'],
			read: ['id', 'fields', 'extra_fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
			validateBeforeFinalization: ['id'],
		}
	},
	TrustAccounts: {
		methods: {
			archive: ['id'],
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id', 'fields'],
			recoverFromArchive: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
		}
	},
	TrustLedgers: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getLedgerTransactions: ['id'],
			purge: ['id'],
			read: ['id'],
			readAccountLedger: ['trust_account_id'],
			refreshAccountLedgerBalance: ['trust_account_id'],
			refreshBalance: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	TrustTransactions: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields'],
			reverse: ['id', 'reason'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
		}
	},
	Upload: {
		methods: {
			describe: ['include_detail'],
			uploadBuildingImage: ['url'],
			uploadContactImage: ['url', 'force_extension'],
			uploadFile: [],
			uploadFileFromUrl: ['url'],
			uploadImage: ['resize_options', 'thumbnail_options', 'ignore_thumbs_if_image_to_small'],
			uploadImageFromUrl: ['url', 'resize_options', 'thumbnail_options', 'ignore_thumbs_if_image_to_small', 'force_extension'],
			uploadListingFloorplanImage: ['url'],
			uploadListingImage: ['url'],
			uploadOfficeLogo: ['url'],
			uploadProjectLogo: ['url'],
			uploadPropertyImage: ['url'],
			uploadResourceImage: ['url'],
			uploadUserProfileImage: ['url'],
		}
	},
	UserNotificationPreferences: {
		methods: {
			describe: ['include_detail'],
			describeEventTypes: [],
			getPreferencesByEventType: [],
			getPreferencesForEventType: ['event_type_id'],
			setPreferencesForEventType: ['event_type_id', 'mediums'],
			setPreferencesForMultipleEvents: ['preference_update_map'],
		}
	},
	UserNotifications: {
		methods: {
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
		}
	},
	UserOutbound: {
		methods: {
			describe: ['include_detail'],
			getEmailCollectionLink: ['collect_type', 'campaign_id'],
			getUnsubscribeLink: ['email_address', 'campaign_id'],
			sendGeneralEmail: ['to', 'subject', 'body', 'options'],
			sendSms: ['to', 'body', 'options', 'cost_category'],
		}
	},
	UserPreferences: {
		methods: {
			describe: ['include_detail'],
			describePreferences: [],
			getPreference: ['id', 'return_default_value_if_null'],
			getPreferences: ['ids', 'return_default_value_if_null'],
			setPreference: ['id', 'value'],
		}
	},
	UserProfile: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			getAccessibleAccounts: ['limit_to_current_application', 'return_account_ids_only'],
			getGroupMemberIds: ['include_self'],
			read: [],
			switchToAccount: ['account_id'],
			update: ['data', 'fields', 'extra_fields'],
			updatePassword: ['current_password', 'password'],
		}
	},
	UserServices: {
		methods: {
			describe: ['include_detail'],
			getConnectedServices: [],
			getConnectionDetails: ['id'],
			getServiceTypes: [],
			initiateServiceConnection: ['service_type'],
			purgeConnection: ['connection_id'],
		}
	},
	VpaCampaigns: {
		methods: {
			addPackToCampaign: ['id', 'pack_id'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			read: ['id', 'fields'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			update: ['data', 'fields', 'extra_fields'],
			updateCampaignStatus: ['id', 'status'],
		}
	},
	VpaLineItems: {
		methods: {
			autocomplete: ['search_string', 'limit', 'return_viewstate'],
			create: ['data', 'return_id'],
			describe: ['include_detail'],
			describeDeleteModes: [],
			describeModel: [],
			describeSearchFields: ['include_detail'],
			purge: ['id'],
			read: ['id'],
			search: ['criteria', 'order_by', 'offset', 'limit', 'create_viewstate', 'search_state', 'ids_only', 'result_format', 'extra_options'],
			toggleCompletionState: ['id', 'is_completed'],
			update: ['data', 'fields', 'extra_fields'],
		}
	}
};